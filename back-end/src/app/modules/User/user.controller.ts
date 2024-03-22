import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const registrationCustomer = catchAsync(async (req, res) => {
  const result = await UserServices.registrationCustomerIntoDb(
    req.file,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Customer registered successfully',
    data: result,
  });
});

export const UserControllers = {
  registrationCustomer,
};
