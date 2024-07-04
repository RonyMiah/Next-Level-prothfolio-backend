"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post('/create-skill', 
//   validateRequest(userValidation.createUserSchemaValidation),
skill_controller_1.SkillControllers.createSkill);
router.get('/', 
//   validateRequest(userValidation.createUserSchemaValidation),
skill_controller_1.SkillControllers.getSkill);
exports.skillRouter = router;
