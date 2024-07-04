"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRouter = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const router = express_1.default.Router();
router.post('/create-experience', 
//   validateRequest(userValidation.createUserSchemaValidation),
experience_controller_1.ExperienceControllers.createExperience);
router.get('/', 
//   validateRequest(userValidation.createUserSchemaValidation),
experience_controller_1.ExperienceControllers.getExperience);
exports.ExperienceRouter = router;
