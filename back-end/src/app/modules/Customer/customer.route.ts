import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { customerControllers } from './customer.controller';
import { customerValidation } from './customer.validation';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  customerControllers.getAllCustomer,
);
router.get(
  '/:customerId',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  customerControllers.getSingleCustomer,
);
router.patch(
  '/:customerId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(customerValidation.updateCustomerValidation),
  customerControllers.updateCustomer,
);

router.delete(
  '/:customerId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  customerControllers.deleteCustomer,
);

export const CustomerRoute = router;
