import { Request, Response } from "express";
import * as userServices from "../services/userServices";

async function signUp(req: Request, res: Response){
    const body = req.body;

    //verificar se a senha e a confirmação de senha são iguais
    await userServices.checkPasswordConfirmation(body.password, body.confirm);
    //verificar se o email já existe na base de dados
    await userServices.checkEmailAvailability(body.email);
    //criptografar a senha
    const hiddenPassword = await userServices.hidePassword(body.password);
    //registrar dados no banco de dados
    await userServices.insertUser(body.email, hiddenPassword);
    //responder com o registro realizado
    const register = await userServices.getUserByEmail(body.email);

    return res.status(201).send(register);
}

async function logIn(req: Request, res: Response){
    const body = req.body;

    //verificar se o email já existe na base de dados
    await userServices.checkEmailRegister(body.email);
    //verificar se a senha está correta
    await userServices.checkPasswordAtLogin(body.email, body.password);
    //gerar token para o usuário
    const register = await userServices.getUserByEmail(body.email)
    const token = await userServices.createUserToken(register.id, body.email);

    return res.status(200).send({token});
}

export {
    signUp,
    logIn
}