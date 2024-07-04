"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.post('/create-project', 
//   validateRequest(userValidation.createUserSchemaValidation),
project_controller_1.ProjectControllers.createProject);
router.get('/', 
//   validateRequest(userValidation.createUserSchemaValidation),
project_controller_1.ProjectControllers.getProject);
router.get('/:id', 
//   validateRequest(userValidation.createUserSchemaValidation),
project_controller_1.ProjectControllers.getSingleProject);
exports.projectRouter = router;
