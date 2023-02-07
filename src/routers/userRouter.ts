import { Router } from "express";
import * as userController from "../controllers/userController";
import { checkSchema } from "../schemas/checkSchema";
import { signUpSchema, logInSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post('/signup', checkSchema(signUpSchema) ,userController.signUp);
userRouter.post('/login', userController.logIn);

export default userRouter;