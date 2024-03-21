import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/registration',
  validateRequest(UserValidation.createUserValidation),
  UserControllers.registrationUser,
);

router.post(
  '/login',
  validateRequest(UserValidation.loginUserValidation),
  UserControllers.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  UserControllers.changePassword,
);

export const UserRoute = router;
