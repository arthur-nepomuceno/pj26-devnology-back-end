import { Request, Response } from "express";

async function insert(req: Request, res: Response) {
    const body = req.body;
    const headers = req.headers;

    //decodificar token
    //inserir link na base de dados
    return res.status(201).send('insert link - ok');
    
}

async function getAll(req: Request, res: Response){
    const headers = req.headers;

    //decodificar token
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