import express, { NextFunction, Request, Response } from 'express';
import { BlogControllers } from './blog.controller';




const router = express.Router();


router.post(
  '/create-blog',
//   validateRequest(userValidation.createUserSchemaValidation),
  BlogControllers.createBlog
);
router.get(
  '/',
//   validateRequest(userValidation.createUserSchemaValidation),
  BlogControllers.getBlog
);

export const blogRouter = router;