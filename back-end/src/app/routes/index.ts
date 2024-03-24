import { Router } from 'express';
import { UserRoute } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { CustomerRoute } from '../modules/Customer/customer.route';
import { ProductRoute } from '../modules/Product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoute,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
