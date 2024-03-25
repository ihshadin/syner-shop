import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userServices } from './user.service';

const registrationCustomer = catchAsync(async (req, res) => {
  const result = await userServices.registrationCustomerIntoDb(
    req.body.password,
    req.file,
    req.body.customer,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Customer registered successfully',
    data: result,
  });
});

const registrationAdmin = catchAsync(async (req, res) => {
  const result = await userServices.registrationAdminIntoDb(
    req.body.password,
    req.file,
    req.body.admin,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Admin created successfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  const { userId, role } = req.user;

  const result = await userServices.getMe(userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await userServices.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Status is updated successfully',
    data: result,
  });
});

export const userControllers = {
  registrationCustomer,
  registrationAdmin,
  getMe,
  changeStatus,
};
