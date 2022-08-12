"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("./controllers/adminController");
const experienceControllers_1 = require("./controllers/experienceControllers");
const classControllers_1 = require("./controllers/classControllers");
const userControllers_1 = require("./controllers/userControllers");
const projectControllers_1 = require("./controllers/projectControllers");
//import { experienceCreateValidator } from './middleware/experienceValidation';
//import { validate } from './middleware/handleValidation';
const router = (0, express_1.Router)();
exports.default = router
    .get('/', (req, res) => {
    res.status(200).send('API IS WORKING - TURRI');
})
    .post('/experience', experienceControllers_1.createExperience) //experienceCreateValidator(), validate,
    .get('/experience/:id', experienceControllers_1.findExperienceById)
    .get('/experience/', experienceControllers_1.getAllExperiences)
    .delete('/experience/:id', experienceControllers_1.removeExperience)
    .patch('/experience/:id', experienceControllers_1.updateExperience)
    .post('/class', classControllers_1.createClass)
    .get('/class/:id', classControllers_1.findClassById)
    .get('/class/', classControllers_1.getAllClasses)
    .delete('/class/:id', classControllers_1.removeClass)
    .patch('/class/:id', classControllers_1.updateClass)
    .post('/user', userControllers_1.createUser)
    .get('/user/:id', userControllers_1.findUserById)
    .get('/user/', userControllers_1.getAllUsers)
    .delete('/user/:id', userControllers_1.removeUser)
    .patch('/user/:id', userControllers_1.updateUser)
    .post('/projects', projectControllers_1.createProject)
    .get('/projects/:id', projectControllers_1.findProjectById)
    .get('/projects', projectControllers_1.getAllProjects)
    .delete('/projects/:id', projectControllers_1.removeProject)
    .patch('/projects/:id', projectControllers_1.updateProject)
    .post('/admin', adminController_1.createAdmin)
    .post('/login', adminController_1.checkAdmin);
