import express, { NextFunction, Request, Response } from 'express';
import { ExperienceControllers } from './experience.controller';





const router = express.Router();


router.post(
  '/create-experience',
//   validateRequest(userValidation.createUserSchemaValidation),
  ExperienceControllers.createExperience
);
router.get(
  '/',
//   validateRequest(userValidation.createUserSchemaValidation),
  ExperienceControllers.getExperience
);

export const ExperienceRouter = router;