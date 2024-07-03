import express, { NextFunction, Request, Response } from 'express';
import { SkillControllers } from './skill.controller';





const router = express.Router();


router.post(
  '/create-skill',
//   validateRequest(userValidation.createUserSchemaValidation),
  SkillControllers.createSkill
);
router.get(
  '/',
//   validateRequest(userValidation.createUserSchemaValidation),
  SkillControllers.getSkill
);

export const skillRouter = router;