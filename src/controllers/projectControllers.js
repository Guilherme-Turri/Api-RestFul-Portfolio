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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = exports.removeProject = exports.getAllProjects = exports.findProjectById = exports.createProject = void 0;
const Project_1 = require("../models/Project");
function createProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const project = yield Project_1.projectModel.create(data);
            return res.status(201).json(project); //201 something created - return json to frontend.
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.createProject = createProject;
function findProjectById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.params.id;
            const project = yield Project_1.projectModel.findById(data);
            if (!project) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            return res.status(200).json(project);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.findProjectById = findProjectById;
function getAllProjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const project = yield Project_1.projectModel.find();
            return res.status(200).json(project);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.getAllProjects = getAllProjects;
function removeProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const project = yield Project_1.projectModel.findById(id);
            if (!project) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield project.delete();
            return res
                .status(200)
                .json({ msg: 'Project has been deleted sucessfully' });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.removeProject = removeProject;
function updateProject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const project = yield Project_1.projectModel.findById(id);
            if (!project) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield Project_1.projectModel.updateOne({ _id: id }, data);
            return res.status(200).json({ data });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.updateProject = updateProject;
