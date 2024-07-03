import express from 'express';
import { AuthRoutes } from '../Modules/Auth/auth.router';
import { userRouter } from '../Modules/User/user.route';
import { projectRouter } from '../Modules/Project/project.route';
import { blogRouter } from '../Modules/Blog/blog.route';
import { ExperienceRouter } from '../Modules/Experience/experience.route';
import { skillRouter } from '../Modules/Skills/skill.route';

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
  {
    path: '/blog',
    route: blogRouter,
  },
  
  {
    path: '/experience',
    route: ExperienceRouter,
  },
  {
    path: '/skill',
    route: skillRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;