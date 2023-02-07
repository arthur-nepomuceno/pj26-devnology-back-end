import { Router } from "express";
import * as userController from "../controllers/userController";

const userRouter = Router();

userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.logIn);

export default userRouter;