import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ProjectService } from "./project.service";



const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Created Successfully ',
    data: result,
  });
});
const getProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getProject();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project Get Successfully ',
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getProject
  
};