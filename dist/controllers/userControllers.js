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
exports.updateUser = exports.removeUser = exports.getAllUsers = exports.findUserById = exports.createUser = void 0;
const User_1 = require("../models/User");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield User_1.userModel.create(data);
            return res.status(201).json(user); //201 something created - return json to frontend.
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.createUser = createUser;
function findUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.params.id;
            const user = yield User_1.userModel.findById(data);
            if (!user) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.findUserById = findUserById;
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User_1.userModel.find();
            return res.status(200).json(user);
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
        }
    });
}
exports.getAllUsers = getAllUsers;
function removeUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const user = yield User_1.userModel.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield user.delete();
            return res.status(200).json({ msg: 'User has been deleted sucessfully' });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.removeUser = removeUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const user = yield User_1.userModel.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'notFound or dontExist' });
            }
            yield User_1.userModel.updateOne({ _id: id }, data);
            return res.status(200).json({ data });
        }
        catch (error) {
            console.log(`Something is wrong ${error.message}`);
            return res.status(404).json({ error: 'notFound or dontExist' });
        }
    });
}
exports.updateUser = updateUser;
