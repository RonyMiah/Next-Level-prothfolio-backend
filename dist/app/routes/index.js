"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../Modules/Auth/auth.router");
const user_route_1 = require("../Modules/User/user.route");
const project_route_1 = require("../Modules/Project/project.route");
const blog_route_1 = require("../Modules/Blog/blog.route");
const experience_route_1 = require("../Modules/Experience/experience.route");
const skill_route_1 = require("../Modules/Skills/skill.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_router_1.AuthRoutes,
    },
    {
        path: '/user',
        route: user_route_1.userRouter,
    },
    {
        path: '/project',
        route: project_route_1.projectRouter,
    },
    {
        path: '/blog',
        route: blog_route_1.blogRouter,
    },
    {
        path: '/experience',
        route: experience_route_1.ExperienceRouter,
    },
    {
        path: '/skill',
        route: skill_route_1.skillRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
