import express, { NextFunction, Request, Response } from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { userValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();


router.post(
  '/create-user',
  validateRequest(userValidation.createUserSchemaValidation),
  UserControllers.createUser
);

export const userRouter = router;