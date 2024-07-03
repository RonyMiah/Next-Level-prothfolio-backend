import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ExperienceService } from "./experience.service";





const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperience(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience Created Successfully ',
    data: result,
  });
});

const getExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.getExperience();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience get Successfully ',
    data: result,
  });
});

export const ExperienceControllers = {
  createExperience,
  getExperience
  
};