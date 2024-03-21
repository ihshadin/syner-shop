import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await userService.createStudentIntoDb(
    req.file,
    password,
    studentData,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Student created successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await userService.createFacultyIntoDb(
    req.file,
    password,
    facultyData,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Faculty created successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await userService.createAdminIntoDb(
    req.file,
    password,
    adminData,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Admin created successfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  const { userId, role } = req.user;

  const result = await userService.getMe(userId, role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = await userService.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Status is updated successfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  getMe,
  changeStatus,
};
