/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  password: string;
  email: string;
  status: 'active' | 'blocked';
  role: 'admin' | 'customer' | 'superAdmin';
  passwordChangeHistory?: {
    password: string;
    timestamp: Date;
  }[];
  passwordChangedAt?: Date;
  isDeleted: boolean;
};

export type TLoginUser = {
  username: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;

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
