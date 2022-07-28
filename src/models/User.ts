import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String },
    position: { type: String },
    stack: [{ type: String }],
    socialMidia: [
      { socialMidiaName: { type: String }, socialMidiaLink: { type: String } },
    ],
    phoneNumber: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
  },
);
export const userModel = model('User', userSchema);
