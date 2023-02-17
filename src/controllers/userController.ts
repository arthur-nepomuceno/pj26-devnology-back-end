import { Request, Response } from "express";
import * as userServices from "../services/userServices.js";

async function signUp(req: Request, res: Response){
    const body = req.body;
 
    await userServices.checkPasswordConfirmation(body.password, body.confirm);
    
    await userServices.checkEmailAvailability(body.email);
    
    const hiddenPassword = await userServices.hidePassword(body.password);
    
    await userServices.insertUser(body.email, hiddenPassword);

    const register = await userServices.getUserByEmail(body.email);

    return res.status(201).send(register);
}

async function logIn(req: Request, res: Response){
    const body = req.body;

    
    await userServices.checkEmailRegister(body.email);
    
    await userServices.checkPasswordAtLogin(body.email, body.password);
    
    const register = await userServices.getUserByEmail(body.email)
    const token = await userServices.createUserToken(register.id, body.email);

    return res.status(200).send({token});
}

export {
    signUp,
    logIn
}