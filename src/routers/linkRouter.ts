import { Router } from "express";
import * as linkController from "../controllers/linkController";
import { checkSchema } from "../schemas/checkSchema";
import { linkSchema } from "../schemas/linkSchema";

const linkRouter = Router();

linkRouter.post('/insertlink', checkSchema(linkSchema) ,linkController.insert);
linkRouter.get('/getlinks', linkController.getAll);
linkRouter.post('/edit/:id', checkSchema(linkSchema) ,linkController.editById);
linkRouter.delete('/delete/:id', linkController.deleteById);

export default linkRouter;