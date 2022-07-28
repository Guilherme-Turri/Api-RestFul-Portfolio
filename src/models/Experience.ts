import { model, Schema } from 'mongoose';

const experienceSchema = new Schema(
  {
    company: { type: String },
    role: { type: String },
    initialDate: { type: Date },
    finalDate: { type: Date || null },
  },
  {
    timestamps: true,
  },
);
export const experienceModel = model('Experience', experienceSchema);
