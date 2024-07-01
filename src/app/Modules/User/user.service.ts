import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import bcrypt from 'bcrypt'
import { userRole } from "@prisma/client";
import prisma from "../../shared/prisma";

const createUser = async (payload: any) => {
  if (!(payload?.password === payload.confirmPassword)) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Password Do not Match');
  }

  const hashPassword = bcrypt.hashSync(payload.password, 12);

  const role = userRole.ADMIN;

  const userData = {
    userName: payload.userName,
    email: payload.email,
    password: hashPassword,
    role,
  };

  const result = await prisma.user.create({
    data: userData,
  });
  const { password, ...returnData } = result;
  return returnData;
};

export const UserServices = {
  createUser,
 
};