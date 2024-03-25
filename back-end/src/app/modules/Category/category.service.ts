/* eslint-disable @typescript-eslint/no-explicit-any */
// import mongoose from 'mongoose';
// import appError from '../../errors/appError';
// import httpStatus from 'http-status';
import slugify from 'slugify';
// import QueryBuilder from '../../builder/QueryBuilder';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TParentCategory, TSubCategory } from './category.interface';
import { ParentCategoryModel, SubCategoryModel } from './category.model';
import appError from '../../errors/appError';
import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import { categorySearchableFields } from './category.constants';

const createParentCategoryIntoDb = async (
  file: any,
  payload: TParentCategory,
) => {
  payload.slug = slugify(payload.title);

  if (file) {
    const imageName = `${payload.title}-${payload.slug}`;
    const path = file.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.icon = secure_url as string;
  }

  const result = await ParentCategoryModel.create(payload);
  return result;
};

const createSubCategoryIntoDb = async (file: any, payload: TSubCategory) => {
  const parentCategory = await ParentCategoryModel.findById(
    payload?.parentCategory,
  );

  if (!parentCategory) {
    throw new appError(httpStatus.NOT_FOUND, 'Parent category not found');
  }

  payload.slug = slugify(payload.title);
  payload.parentCategory = parentCategory._id;

  if (file) {
    const imageName = `${payload.title}-${payload.slug}`;
    const path = file.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.icon = secure_url as string;
  }

  const result = await SubCategoryModel.create(payload);
  return result;
};

const getAllParentCategoryFromDb = async (query: Record<string, unknown>) => {
  const ParentCategoryQuery = new QueryBuilder(
    ParentCategoryModel.find(),
    query,
  )
    .search(categorySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await ParentCategoryQuery.countTotal();
  const result = await ParentCategoryQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleParentCategoryFromDb = async (id: string) => {
  const result = await ParentCategoryModel.findById(id);
  return result;
};

const updateParentCategoryIntoDB = async (
  id: string,
  payload: Partial<TParentCategory>,
) => {
  const result = await ParentCategoryModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

// const deleteParentCategoryFromDb = async (id: string) => {
//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();

//     const deleteParentCategory = await ParentCategoryModel.findByIdAndUpdate(
//       id,
//       { isDeleted: true },
//       { upsert: true, session },
//     );

//     if (!deleteParentCategory) {
//       throw new appError(
//         httpStatus.BAD_REQUEST,
//         'Failed to delete ParentCategory',
//       );
//     }

//     const deletedUser = await User.findByIdAndUpdate(
//       deleteParentCategory._id,
//       { isDeleted: true },
//       { upsert: true, session },
//     );

//     if (!deletedUser) {
//       throw new appError(httpStatus.BAD_REQUEST, 'Failed to delete User');
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     return deleteParentCategory;
//   } catch (error) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new Error('Failed to delete ParentCategory');
//   }
// };

export const categoryServices = {
  createParentCategoryIntoDb,
  createSubCategoryIntoDb,
  getAllParentCategoryFromDb,
  getSingleParentCategoryFromDb,
  updateParentCategoryIntoDB,
  // deleteParentCategoryFromDb,
};
