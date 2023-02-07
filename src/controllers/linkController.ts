import { Request, Response } from "express";

async function insert(req: Request, res: Response) {
    res.status(201).send('insert link - ok');
    return;
}

async function get(req: Request, res: Response){
    res.status(200).send('get links - ok');
    return;
}

async function edit(req: Request, res: Response){
    res.status(200).send('edit links - ok');
    return;
}

export {
    insert,
    get,
    edit
}