import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthServices } from "./auth.services";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  //set refreshToken to Cookie
  const { refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: false,
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Login Successfully ',
    data: result,
  });
});
export const AuthControllers = {
  loginUser,
 
};