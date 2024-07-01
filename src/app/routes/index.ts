import express from 'express';
import { AuthRoutes } from '../Modules/Auth/auth.router';
import { userRouter } from '../Modules/User/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: userRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;