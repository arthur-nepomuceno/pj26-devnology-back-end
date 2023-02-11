import { Request, Response } from "express";
import { Jwt } from "jsonwebtoken";
import * as linkServices from "../services/linkServices";

async function insert(req: Request, res: Response) {
    const body = req.body;
    const headers = req.headers;
    
    const token: string | any = headers.authorization?.replace(/Bearer |'/g, '')

    //decodificar token
    const user: Jwt | any = await linkServices.decodeToken(token)

    //inserir link na base de dados
    await linkServices.insertLink(
        user.id,
        body.url,
        body.title,
        body.description
    )

    return res.status(201).send('Your link was added successfully.');
    
}

async function getAll(req: Request, res: Response){
    const headers = req.headers;
    const token: string | any = headers.authorization?.replace(/'Bearer |'/g, '')

    //decodificar token
    const user: Jwt | any = linkServices.decodeToken(token);
    //buscar todos os registros no id do usuário

    
    return res.status(200).send('get links - ok');
}

async function editById(req: Request, res: Response){
    const headers = req.headers;
    const params = req.params;

    //decodificar token
    //alterar registro de acordo com o id do usuário
    return res.status(200).send('edit links - ok');
}

async function deleteById(req: Request, res: Response){
    const headers = req.headers;
    const params = req.params;

    //decodificar token
    //deletar registro de acordo com o id do usuário
    return res.status(200).send('edit links - ok');
}

export {
    insert,
    getAll,
    editById,
    deleteById
}