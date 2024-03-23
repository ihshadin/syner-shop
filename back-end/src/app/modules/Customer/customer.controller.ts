/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { customerServices } from './customer.service';

const getAllCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.getAllCustomerFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Customer are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.getSingleCustomerFromDb(
    req.params.customerId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer is retrieved successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.updateCustomerIntoDB(
    req.params.customerId,
    req.body.customer,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Customer is updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.deleteCustomerFromDb(
    req.params.customerId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Customer delete successfully',
    data: result,
  });
});

export const customerControllers = {
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
