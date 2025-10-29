import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    orderedFoods: { type: Object },
    ttl: { type: Date },
    isVerified: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timelapse: true,
  }
);

export const usersSchema = model("users", userSchema);
