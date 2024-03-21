/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  firstName: string;
  lastName: string;
  username: string;
  mobileNumber: string;
  password: string;
  email: string;
  isBlocked: boolean;
  address?: string;
  role: 'admin' | 'customer' | 'superAdmin';
  passwordChangeHistory?: {
    password: string;
    timestamp: Date;
  }[];
  passwordChangedAt: Date;
};

export type TLoginUser = {
  username: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>;

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;

  //instance methods for checking if password is changed or not. if changed password token will unAuthorize
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
