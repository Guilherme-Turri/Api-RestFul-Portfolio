import { model, Schema } from 'mongoose';

const classSchema = new Schema(
  {
    class: { type: String },
    company: { type: String },
    isComplete: { type: Boolean },
    completedAt: { type: Date || null },
  },
  {
    timestamps: true,
  },
);
export const classModel = model('Class', classSchema);
