import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    food: { type: String, required: true },
  },
  {
    timelapse: true,
  }
);

export const food = model("foods", foodSchema);
