"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const jwtHelpars_1 = require("../../helpars/jwtHelpars");
const config_1 = __importDefault(require("../../routes/config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            //   status: userStatus.ACTIVE,
        },
    });
    const comparieData = yield bcrypt_1.default.compare(payload.password, userData.password);
    if (!comparieData) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Password Do not Match ');
    }
    const accessToken = jwtHelpars_1.JwtHelpares.generateToken({ email: userData.email, role: userData.role, id: userData.id }, config_1.default.jwt_secret, config_1.default.jwt_expire_in);
    const refreshToken = jwtHelpars_1.JwtHelpares.generateToken({ email: userData.email, role: userData.role, id: userData.id }, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expire_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.AuthServices = {
    loginUser,
};
