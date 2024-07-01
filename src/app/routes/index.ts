import express from 'express';
import { AuthRoutes } from '../Modules/Auth/auth.router';
import { userRouter } from '../Modules/User/user.route';
import { projectRouter } from '../Modules/Project/project.route';

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
  {
    path: '/project',
    route: projectRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;