import catchAsync from '../../utils/catchAsync';
import { AdminServices } from './admin.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getSingleAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getSingleAdminFromDB(req.params.adminId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Admin is retrieved successfully',
    data: result,
  });
});

const getAllAdmins = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Admins are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const { adminId } = req.params;

  const { admin } = req.body;
  const result = await AdminServices.updateAdminIntoDB(adminId, admin);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Admin is updated successfully',
    data: result,
  });
});

const deleteAdmin = catchAsync(async (req, res) => {
  const { adminId } = req.params;
  const result = await AdminServices.deleteAdminFromDB(adminId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Admin is deleted successfully',
    data: result,
  });
});

export const AdminControllers = {
  getAllAdmins,
  getSingleAdmin,
  deleteAdmin,
  updateAdmin,
};
