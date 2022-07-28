"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    links: [
        {
            name: { type: String },
            src: { type: String },
        },
    ],
}, {
    timestamps: true,
});
exports.projectModel = (0, mongoose_1.model)('Projects', projectSchema);
