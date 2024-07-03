import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";

import { BlogService } from "./blog.service";



const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Created Successfully ',
    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs get Successfully ',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getBlog
  
};