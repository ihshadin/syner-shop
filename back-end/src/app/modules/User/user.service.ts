/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { TUser } from './user.interface';
import { User } from './user.model';
import appError from '../../errors/appError';
import config from '../../config';
import bcrypt from 'bcrypt';
import { USER_ROLE } from './user.constant';
import { TCustomer } from '../Customer/customer.interface';
import mongoose from 'mongoose';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { Customer } from '../Customer/customer.model';
import { TAdmin } from '../Admin/admin.interface';
import { Admin } from '../Admin/admin.model';

const registrationCustomerIntoDb = async (
  password: string,
  file: any,
  payload: TCustomer,
) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new appError(httpStatus.FORBIDDEN, 'User Already Exists');
  }

  const userData: Partial<TUser> = {};
  userData.email = payload.email;
  userData.password = password;
  userData.role = USER_ROLE.customer;
  userData.passwordChangeHistory = [
    {
      password: await bcrypt.hash(password, Number(config.bcrypt_salt_rounds)),
      timestamp: new Date(),
    },
  ];

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (file) {
      const imageName = `${payload.firstName}${payload.contactNo}`;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    //create a new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set username , _id as user
    payload.email = newUser[0].email;
    payload.user = newUser[0]._id;

    //create a new Customer
    const newCustomer = await Customer.create([payload], { session });

    if (!newCustomer.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to Create Customer');
    }

    await session.commitTransaction();
    await session.endSession();

    return newCustomer;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new appError(
      httpStatus.BAD_REQUEST,
      'Failed to create user and customer',
    );
    // throw error;
  }
};

const registrationAdminIntoDb = async (
  password: string,
  file: any,
  payload: TAdmin,
) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new appError(httpStatus.FORBIDDEN, 'User Already Exists');
  }

  const userData: Partial<TUser> = {};
  userData.email = payload.email;
  userData.password = password;
  userData.role = USER_ROLE.admin;
  userData.passwordChangeHistory = [
    {
      password: await bcrypt.hash(password, Number(config.bcrypt_salt_rounds)),
      timestamp: new Date(),
    },
  ];

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (file) {
      const imageName = `${payload.firstName}${payload.contactNo}`;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      payload.profileImg = secure_url as string;
    }

    //create a new user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set email , _id as user
    payload.email = newUser[0].email;
    payload.user = newUser[0]._id;

    //create a new Admin
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to Create Admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new appError(
      httpStatus.BAD_REQUEST,
      'Failed to create user and admin',
    );
    // throw error;
  }
};

const getMe = async (id: string, role: string) => {
  // const { userId, role } = decoded;

  let result = null;
  if (role === USER_ROLE.customer) {
    result = await Customer.findById(id).populate('user');
  }
  if (role === USER_ROLE.admin) {
    result = await Admin.findById(id).populate('user');
  }

  // if (role === 'faculty') {
  //   result = await Faculty.findOne({ id: userId }).populate('user');
  // }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const userServices = {
  registrationCustomerIntoDb,
  registrationAdminIntoDb,
  getMe,
  changeStatus,
};
