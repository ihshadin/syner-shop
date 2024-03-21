/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from './user.utils';
import appError from '../../errors/appError';
import httpStatus from 'http-status';
import { TFaculty } from '../Faculty/faculty.interface';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { Faculty } from '../Faculty/faculty.model';
import { TAdmin } from '../Admin/admin.interface';
import { Admin } from '../Admin/admin.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createStudentIntoDb = async (
  file: any,
  password: string,
  payload: TStudent,
) => {
  const userData: Partial<TUser> = {};

  //set student role
  userData.role = 'student';
  // set student email
  userData.email = payload.email;

  //if password is not provided
  userData.password = password || (config.default_password as string);

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new appError(400, 'Academic department not found');
  }

  payload.academicFaculty = academicDepartment?.academicFaculty;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //set auto generated id
    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester,
    );

    if (file) {
      const imageName = `${userData.id}${payload?.name?.firstName}`;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    //create a new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    //create a new student
    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
    // throw error;
  }
};

const createFacultyIntoDb = async (
  file: any,
  password: string,
  payload: TFaculty,
) => {
  const userData: Partial<TUser> = {};

  //set faculty role
  userData.role = 'faculty';
  // set faculty email
  userData.email = payload.email;

  //if password is not provided
  userData.password = password || (config.default_password as string);

  // find academic semester info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new appError(400, 'Academic department not found');
  }

  payload.academicFaculty = academicDepartment?.academicFaculty;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //set auto generated id
    userData.id = await generateFacultyId();

    if (file) {
      const imageName = `${userData.id}${payload?.name?.firstName}`;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    //create a new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    //create a new student
    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create Faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create Faculty');
  }
};

const createAdminIntoDb = async (
  file: any,
  password: string,
  payload: TAdmin,
) => {
  const userData: Partial<TUser> = {};

  //set admin role
  userData.role = 'admin';
  // set admin email
  userData.email = payload.email;

  //if password is not provided
  userData.password = password || (config.default_password as string);

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //set auto generated id
    userData.id = await generateAdminId();

    if (file) {
      const imageName = `${userData.id}${payload?.name?.firstName}`;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    //create a new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    //create a new student
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create Admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create Admin');
  }
};

const getMe = async (userId: string, role: string) => {
  // const { userId, role } = decoded;

  let result = null;
  if (role === 'student') {
    result = await Student.findOne({ id: userId }).populate('user');
  }
  if (role === 'admin') {
    result = await Admin.findOne({ id: userId }).populate('user');
  }

  if (role === 'faculty') {
    result = await Faculty.findOne({ id: userId }).populate('user');
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const userService = {
  createStudentIntoDb,
  createFacultyIntoDb,
  createAdminIntoDb,
  getMe,
  changeStatus,
};
