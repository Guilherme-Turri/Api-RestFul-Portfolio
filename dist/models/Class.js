"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classModel = void 0;
const mongoose_1 = require("mongoose");
const classSchema = new mongoose_1.Schema({
    class: { type: String },
    company: { type: String },
    isComplete: { type: Boolean },
    completedAt: { type: Date || null },
}, {
    timestamps: true,
});
exports.classModel = (0, mongoose_1.model)('Class', classSchema);
