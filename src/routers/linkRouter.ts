import { Router } from "express";
import * as linkController from "../controllers/linkController.js";
import { checkSchema } from "../schemas/checkSchema.js";
import { linkSchema } from "../schemas/linkSchema.js";

const linkRouter = Router();

linkRouter.post('/insertlink', checkSchema(linkSchema) ,linkController.insert);
linkRouter.get('/getlinks', linkController.getAll);
linkRouter.post('/edit/:id', checkSchema(linkSchema) ,linkController.editById);
linkRouter.delete('/delete/:id', linkController.deleteById);

export default linkRouter;