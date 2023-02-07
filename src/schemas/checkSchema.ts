import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

function checkSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        const check = schema.validate(body);

        if(check.error){
            return res.status(422).send(check.error.message)
        };

        next();
    }
}

export {
    checkSchema
}