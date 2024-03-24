/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import appError from '../../errors/appError';
import httpStatus from 'http-status';
import slugify from 'slugify';
import QueryBuilder from '../../builder/QueryBuilder';
import { User } from '../User/user.model';
import { Product } from './product.model';
import { TImages, TProduct } from './product.interface';
import { productSearchableFields } from './product.constants';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createSingleProductIntoDb = async (files: any, payload: TProduct) => {
  payload.slug = slugify(payload.title);

  const uploadedImages: TImages[] = [];

  if (files && files.length > 0) {
    // Loop through each file and upload it to Cloudinary
    for (const file of files) {
      const imageName = `${payload.title}-${payload.brand}-${file.originalname}`;
      const path = file.path;

      const { secure_url, public_id } = await sendImageToCloudinary(
        imageName,
        path,
      );

      // Push the uploaded image details to the uploadedImages array
      uploadedImages.push({
        public_id: public_id as string,
        url: secure_url as string,
      });
    }
  }

  payload.images = uploadedImages;

  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDb = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProductFromDb = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deleteProduct = await Product.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { upsert: true, session },
    );

    if (!deleteProduct) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to delete Product');
    }

    const deletedUser = await User.findByIdAndUpdate(
      deleteProduct._id,
      { isDeleted: true },
      { upsert: true, session },
    );

    if (!deletedUser) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to delete User');
    }

    await session.commitTransaction();
    await session.endSession();

    return deleteProduct;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete Product');
  }
};

export const productServices = {
  createSingleProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
  updateProductIntoDB,
  deleteProductFromDb,
};
