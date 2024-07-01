import express, { NextFunction, Request, Response } from 'express';
import { ProjectControllers } from './project.controller';



const router = express.Router();


router.post(
  '/create-project',
//   validateRequest(userValidation.createUserSchemaValidation),
  ProjectControllers.createProject
);

export const projectRouter = router;