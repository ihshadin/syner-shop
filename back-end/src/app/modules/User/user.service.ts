import httpStatus from 'http-status';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import appError from '../../errors/appError';
import config from '../../config';
import { createToken } from './user.utils';
import bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';

const registrationUser = async (payload: TUser) => {
  payload.passwordChangeHistory = [
    {
      password: await bcrypt.hash(
        payload.password,
        Number(config.bcrypt_salt_rounds),
      ),
      timestamp: new Date(),
    },
  ];

  const result = await User.create(payload);

  return result;
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByCustomId(payload.username);

  if (!user) {
    throw new appError(
      httpStatus.NOT_FOUND,
      'You do not have the necessary permissions to access this resource',
    );
  }

  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new appError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  //create token and sent to the  client
  const jwtPayload = {
    username: user.username,
    role: user.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires_in as string,
  );

  // const newUser = await User.findOne({ username: user.username });

  return {
    // user: newUser,
    token,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { currentPassword: string; newPassword: string },
) => {
  const user = await User.isUserExistsByCustomId(userData.username);

  if (!user) {
    throw new appError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  if (!(await User.isPasswordMatched(payload.currentPassword, user.password)))
    throw new appError(httpStatus.FORBIDDEN, 'Password do not matched');

  // Check if the new password matches any of the last 2 passwords or the current one
  const passwordHistory = user.passwordChangeHistory || [];
  let isPasswordInHistory = false;

  for (const entry of passwordHistory) {
    if (await User.isPasswordMatched(payload.newPassword, entry.password)) {
      isPasswordInHistory = true;
      break;
    }
  }

  if (isPasswordInHistory) {
    throw new appError(
      httpStatus.FORBIDDEN,
      `Password change failed. Ensure the new password is unique and not among the last 2 used (last used on ${
        passwordHistory[0]?.timestamp || new Date()
      }).`,
    );
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  const updatedHistory = [
    { password: newHashedPassword, timestamp: new Date() },
    ...passwordHistory.slice(0, 2),
  ];

  const result = await User.findOneAndUpdate(
    {
      username: userData.username,
      role: userData.role,
    },
    {
      password: newHashedPassword,
      passwordChangeHistory: updatedHistory,
    },
  );

  return result;
};

export const UserServices = {
  registrationUser,
  loginUser,
  changePassword,
};
