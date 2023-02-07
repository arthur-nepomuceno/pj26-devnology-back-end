import { Router } from "express";
import userRouter from "./userRouter";
import linkRouter from "./linkRouter";

const router = Router();

router.use(userRouter);
router.use(linkRouter);

export default router;