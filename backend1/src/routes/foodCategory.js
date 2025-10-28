import { Router } from "express";
import {
  createFoodCategory,
  deleteFoodcategoryById,
  getFoodCategory,
  updateFoodCategory,
} from "../controller/foodCategory.js";
export const categoryRoute = Router();

categoryRoute
  .post("/", createFoodCategory)
  .get("/", getFoodCategory)
  .patch("/:id", updateFoodCategory)
  .delete("/:id", deleteFoodcategoryById);
