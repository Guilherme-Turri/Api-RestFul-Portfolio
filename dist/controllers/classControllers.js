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
exports.updateClass = exports.removeClass = exports.getAllClasses = exports.findClassById = exports.createClass = void 0;
const Class_1 = require("../models/Class");
function createClass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const classDone = yield Class_1.classModel.create(data);
            return res.status(201).json(classDone); //201 something created - return json to frontend.
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.createClass = createClass;
function findClassById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.params.id;
            const classDone = yield Class_1.classModel.findById(data);
            if (!classDone) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            return res.status(200).json(classDone);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.findClassById = findClassById;
function getAllClasses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const classDone = yield Class_1.classModel.find();
            return res.status(200).json(classDone);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.getAllClasses = getAllClasses;
function removeClass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const classDone = yield Class_1.classModel.findById(id);
            if (!classDone) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield classDone.delete();
            return res.status(200).json({ msg: 'Class has been deleted sucessfully' });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.removeClass = removeClass;
function updateClass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const classDone = yield Class_1.classModel.findById(id);
            if (!classDone) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield Class_1.classModel.updateOne({ _id: id }, data);
            return res.status(200).json({ data });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.updateClass = updateClass;
