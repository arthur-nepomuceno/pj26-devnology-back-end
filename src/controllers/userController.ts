import { Request, Response } from "express";
import * as userServices from "../services/userServices";

async function signUp(req: Request, res: Response){
    const body = req.body;

    //verificar se a senha e a confirmação de senha são iguais
    await userServices.checkConfirmPassword(body.password, body.confirm);
    //verificar se o email já existe na base de dados
    await userServices.checkEmailAvailability(body.email);
    //criptografar a senha
    const hiddenPassword = await userServices.hidePassword(body.password);
    //registrar dados no banco de dados
    await userServices.insertUser(body.email, hiddenPassword);
    
    return res.status(201).send(body);
}

async function logIn(req: Request, res: Response){
    const body = req.body;

    //verificar se o email já existe na base de dados
    //verificar se a senha está correta
    //persistir login
    //gerar token para o usuário
    res.status(200).send('logIn ok');
}

export {
    signUp,
    logIn
}