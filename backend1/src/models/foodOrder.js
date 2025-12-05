import { Schema, model } from "mongoose";
const itemSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: "foods", required: true },
  name: String,
  price: Number,
  howMuch: { type: Number, default: 1 },
  note: String,
});

const foodOrderSchema = new Schema(
  {
    user: { type: "string", ref: "users", required: true },
    totalPrice: { type: Number, required: true },
    items: { type: [itemSchema], required: true },
    status: {
      type: String,
      enum: ["pending", "canceled", "delivered"],
      default: "pending",
    },
  },
  {
    timelapse: true,
  }
);

export const foodOrder = model("Food order", foodOrderSchema);
