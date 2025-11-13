import { Router } from "express";

import {
  createFoodOrder,
  deleteFoodOrderById,
  getFoodOrder,
  updateFoodOrder,
} from "../controller/food.order.controller.js";
export const foodOrderRoute = Router();

foodOrderRoute
  .post("/", createFoodOrder)
  .get("/user/:userId", getFoodOrder)
  .patch("/:id", updateFoodOrder)
  .delete("/:id", deleteFoodOrderById);
