import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { SkillService } from "./skill.service";





const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkill(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill Created Successfully ',
    data: result,
  });
});
const getSkill = catchAsync(async (req, res) => {
  const result = await SkillService.getSkill();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill get Successfully ',
    data: result,
  });
});

export const SkillControllers = {
  createSkill,
  getSkill
  
};