import { model, Schema } from 'mongoose';

const projectSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    links: [
      {
        name: { type: String },
        src: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  },
);
export const projectModel = model('Projects', projectSchema);
