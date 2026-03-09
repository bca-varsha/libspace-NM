import userController from "./authController.js";
import express from "express";
import { verifyToken } from "./verify_token.js";
let userRouter = express.Router();




userRouter.post("/register", userController.registerUser);
userRouter.post("/signup", userController.registerUser);
userRouter.post("/create", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/logout", userController.logoutUser);

userRouter.delete("/:userId", verifyToken, userController.deleteUser);

export default userRouter;
