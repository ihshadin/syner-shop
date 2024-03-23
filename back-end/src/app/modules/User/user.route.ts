import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
const router = express.Router();

router.post(
  '/customer-registration',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(UserValidation.createCustomerValidation),
  UserControllers.registrationCustomer,
);

export const UserRoute = router;
