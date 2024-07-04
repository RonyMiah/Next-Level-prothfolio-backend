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

router.get(
  '/:id',
 //   validateRequest(userValidation.createUserSchemaValidation),
  ProjectControllers.getSingleProject
);


export const projectRouter = router;