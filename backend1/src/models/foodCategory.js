import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    category: { type: String, required: true },
  },
  {
    timelapse: true,
  }
);

export const foodCategory = model("Category", categorySchema);
