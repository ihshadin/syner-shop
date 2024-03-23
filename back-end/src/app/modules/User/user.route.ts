import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { userControllers } from './user.controller';
import { customerValidation } from '../Customer/customer.validation';
import { adminValidations } from '../Admin/admin.validation';
import { userValidation } from './user.validation';
const router = express.Router();

router.post(
  '/customer-registration',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(customerValidation.registrationCustomerValidation),
  userControllers.registrationCustomer,
);

router.post(
  '/admin-registration',
  auth(USER_ROLE.superAdmin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(adminValidations.registrationAdminValidationSchema),
  userControllers.registrationAdmin,
);

router.get(
  '/me',
  auth(USER_ROLE.customer, USER_ROLE.admin, USER_ROLE.superAdmin),
  userControllers.getMe,
);

router.post(
  '/change-status/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(userValidation.changeStatusValidationSchema),
  userControllers.changeStatus,
);

export const UserRoute = router;
