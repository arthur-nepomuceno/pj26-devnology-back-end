import { Request, Response, NextFunction } from "express"

function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction){
    const {type, message} = error;

    const status = {
        bad_request: 400,
        unauthorized: 401,
        not_found: 404,
        not_acceptable: 406,
        conflict: 409,
        unprocessable_entity: 422
    };

    if (type === 'invalid_email') return res.status(status.not_acceptable).send(message);
    if (type === 'password_and_confirm_password_do_not_match') return res.status(status.conflict).send(message);
    if (type === 'invalid_password') return res.status(status.conflict).send(message);
    if (type === 'unknown_email') return res.status(status.not_acceptable).send(message);
    if (type === 'invalid_user_link_match') return res.status(status.unauthorized).send(message);

    return res.status(500).send(`Unexpected server error: ${error}`);
}

export {
    errorHandler
}