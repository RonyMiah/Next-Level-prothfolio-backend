import express, { NextFunction, Request, Response } from 'express';
import { BlogControllers } from './blog.controller';




const router = express.Router();


router.post(
  '/create-blog',
//   validateRequest(userValidation.createUserSchemaValidation),
  BlogControllers.createBlog
);

export const blogRouter = router;