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
exports.updateExperience = exports.removeExperience = exports.getAllExperiences = exports.findExperienceById = exports.createExperience = void 0;
const Experience_1 = require("../models/Experience");
function createExperience(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const experience = yield Experience_1.experienceModel.create(data);
            return res.status(201).json(experience); //201 something created - return json to frontend.
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.createExperience = createExperience;
function findExperienceById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.params.id;
            const experience = yield Experience_1.experienceModel.findById(data);
            if (!experience) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            return res.status(200).json(experience);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.findExperienceById = findExperienceById;
function getAllExperiences(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const experience = yield Experience_1.experienceModel.find();
            return res.status(200).json(experience);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.getAllExperiences = getAllExperiences;
function removeExperience(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const experience = yield Experience_1.experienceModel.findById(id);
            if (!experience) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield experience.delete();
            return res
                .status(200)
                .json({ msg: 'Experience has been deleted sucessfully' });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.removeExperience = removeExperience;
function updateExperience(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const experience = yield Experience_1.experienceModel.findById(id);
            if (!experience) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield Experience_1.experienceModel.updateOne({ _id: id }, data);
            return res.status(200).json({ data });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.updateExperience = updateExperience;
