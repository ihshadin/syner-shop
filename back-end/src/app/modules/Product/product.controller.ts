/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { productServices } from './product.service';

const createSingleProduct = catchAsync(async (req, res) => {
  const result = await productServices.createSingleProductIntoDb(
    req.files,
    req.body.product,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Product is created successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Product are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await productServices.getSingleProductFromDb(
    req.params.productId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updateProductIntoDB(
    req.params.productId,
    req.body.product,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deleteProductFromDb(
    req.params.productId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Product delete successfully',
    data: result,
  });
});

export const productControllers = {
  createSingleProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
