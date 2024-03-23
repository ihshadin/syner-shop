import { Router } from 'express';
import { UserRoute } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { CustomerRoute } from '../modules/Customer/customer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
