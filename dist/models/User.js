"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String },
    position: { type: String },
    stack: [{ type: String }],
    socialMidia: [
        { socialMidiaName: { type: String }, socialMidiaLink: { type: String } },
    ],
    phoneNumber: { type: String },
    email: { type: String },
}, {
    timestamps: true,
});
exports.userModel = (0, mongoose_1.model)('User', userSchema);
