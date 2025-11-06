import { Router } from "express";
import {
  deleteUser,
  getUsers,
  login,
  signUp,
  updateUsers,
} from "../controller/users.controller.js";
import { verifyToken } from "../middleware/auth.js";

export const userRoute = Router();

userRoute
  .post("/signUp", signUp)
  .post("/login", login)
  .get("/", getUsers)
  .patch("/:id", updateUsers)
  .delete("/:id", deleteUser);
