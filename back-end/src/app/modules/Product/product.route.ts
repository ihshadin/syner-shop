import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { productControllers } from './product.controller';
import { productValidation } from './product.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-product',
  upload.array('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(productValidation.createProductValidation),
  productControllers.createSingleProduct,
);

router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getSingleProduct);
router.patch(
  '/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(productValidation.updateProductValidation),
  productControllers.updateProduct,
);

router.delete(
  '/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  productControllers.deleteProduct,
);

export const ProductRoute = router;
