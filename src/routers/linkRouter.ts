import { Router } from "express";
import * as linkController from "../controllers/linkController";

const linkRouter = Router();

linkRouter.post('/insert-link', linkController.insert);
linkRouter.get('/get-links', linkController.get);
linkRouter.post('/edit-link', linkController.edit);

export default linkRouter;