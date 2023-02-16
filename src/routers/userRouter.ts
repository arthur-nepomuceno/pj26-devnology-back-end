import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { checkSchema } from "../schemas/checkSchema.js";
import { signUpSchema, logInSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/signup', checkSchema(signUpSchema) ,userController.signUp);
userRouter.post('/login', userController.logIn);

export default userRouter;