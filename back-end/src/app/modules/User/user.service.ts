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
    // throw new Error('Failed to create student');
    throw error;
  }
};

// const changePassword = async (
//   userData: JwtPayload,
//   payload: { currentPassword: string; newPassword: string },
// ) => {
//   const user = await User.isUserExistsByUsername(userData.username);

//   if (!user) {
//     throw new appError(httpStatus.NOT_FOUND, 'This user is not found !');
//   }

//   if (!(await User.isPasswordMatched(payload.currentPassword, user.password)))
//     throw new appError(httpStatus.FORBIDDEN, 'Password do not matched');

//   // Check if the new password matches any of the last 2 passwords or the current one
//   const passwordHistory = user.passwordChangeHistory || [];
//   let isPasswordInHistory = false;

//   for (const entry of passwordHistory) {
//     if (await User.isPasswordMatched(payload.newPassword, entry.password)) {
//       isPasswordInHistory = true;
//       break;
//     }
//   }

//   if (isPasswordInHistory) {
//     throw new appError(
//       httpStatus.FORBIDDEN,
//       `Password change failed. Ensure the new password is unique and not among the last 2 used (last used on ${
//         passwordHistory[0]?.timestamp || new Date()
//       }).`,
//     );
//   }

//   const newHashedPassword = await bcrypt.hash(
//     payload.newPassword,
//     Number(config.bcrypt_salt_rounds),
//   );

//   const updatedHistory = [
//     { password: newHashedPassword, timestamp: new Date() },
//     ...passwordHistory.slice(0, 2),
//   ];

//   const result = await User.findOneAndUpdate(
//     {
//       username: userData.username,
//       role: userData.role,
//     },
//     {
//       password: newHashedPassword,
//       passwordChangeHistory: updatedHistory,
//     },
//   );

//   return result;
// };

export const UserServices = {
  registrationCustomerIntoDb,
};
