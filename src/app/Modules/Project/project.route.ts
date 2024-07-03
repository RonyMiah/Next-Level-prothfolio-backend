import express, { NextFunction, Request, Response } from 'express';
import { ProjectControllers } from './project.controller';



const router = express.Router();


router.post(
  '/create-project',
//   validateRequest(userValidation.createUserSchemaValidation),
  ProjectControllers.createProject
);
router.get(
  '/',
//   validateRequest(userValidation.createUserSchemaValidation),
  ProjectControllers.getProject
);

export const projectRouter = router;