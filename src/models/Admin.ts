import { model, Schema } from 'mongoose';

const adminSchema = new Schema(
  {
    name: { type: String },
    pass: { type: String },
  },
  {
    timestamps: true,
  },
);
export const adminModel = model('Admin', adminSchema);
