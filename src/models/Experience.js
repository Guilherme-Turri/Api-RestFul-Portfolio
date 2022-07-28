"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceModel = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    company: { type: String },
    role: { type: String },
    initialDate: { type: Date },
    finalDate: { type: Date || null },
}, {
    timestamps: true,
});
exports.experienceModel = (0, mongoose_1.model)('Experience', experienceSchema);
