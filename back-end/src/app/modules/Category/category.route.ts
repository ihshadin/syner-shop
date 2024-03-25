import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { categoryValidation } from './category.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import { categoryControllers } from './category.controller';

const router = express.Router();

router.post(
  '/create-category',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(categoryValidation.createParentCategoryValidation),
  categoryControllers.createParentCategory,
);

router.post(
  '/create-sub-category',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(categoryValidation.createSubCategoryValidation),
  categoryControllers.createSubCategory,
);

// router.get('/', productControllers.getAllProduct);
// router.get('/:productId', productControllers.getSingleProduct);
// router.patch(
//   '/:productId',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   validateRequest(productValidation.updateProductValidation),
//   productControllers.updateProduct,
// );

// router.delete(
//   '/:productId',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   productControllers.deleteProduct,
// );

export const CategoryRoute = router;
