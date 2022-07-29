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
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
//onst dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority`;
//{ user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true }
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb+srv://cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority', {
                user: process.env.DB_USER,
                pass: process.env.DB_PASS,
            });
            console.log('changevar');
            console.log('db connected');
        }
        catch (e) {
            console.log('fail to connect' + e);
        }
    });
}
exports.default = connect;
//async function connect() {
//try {
//await mongoose.connect(
//'mongodb+srv://cluster0.xmkj6.mongodb.net/?retryWrites=true&w=majority',
//{ user: process.env.DB_USER, pass: process.env.DB_PASS },
//);
//console.log('change url- new user');
//console.log('db connected');
//} catch (e) {
// console.log('fail to connect' + e);
// }
//}
