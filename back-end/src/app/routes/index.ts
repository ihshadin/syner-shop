import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
