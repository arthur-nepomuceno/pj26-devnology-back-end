import { Request, Response } from "express";
import { Jwt, JwtPayload } from "jsonwebtoken";
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

async function getAll(req: Request, res: Response) {
    const headers = req.headers;
    const token: string | any = headers.authorization?.replace(/Bearer |'/g, '')

    //decodificar token
    const user: Jwt | any = await linkServices.decodeToken(token);

    //buscar todos os registros no id do usuário
    const userLinks = await linkServices.getAll(user.id);

    return res.status(200).send(userLinks);
}

async function editById(req: Request, res: Response) {
    const headers = req.headers;
    const params = req.params;
    const body = req.body;

    const token: Jwt | any = headers.authorization?.replace(/Bearer |'/g, '');
    const { id } = params;
    const { url, title, description } = body;

    //decodificar token
    const user: JwtPayload | any = await linkServices.decodeToken(token);
    
    const link: JwtPayload | any = await linkServices.getById(+id)
    //verificar se o link pertence ao usuário que está fazendo a requisição
    await linkServices.checkUserLinkMatch(link?.userId, user.id);

    //alterar registro
    await linkServices.editById(+id, user.id, url, title, description);

    const editedLink = await linkServices.getById(+id);
    return res.status(202).send(editedLink);
}

async function deleteById(req: Request, res: Response) {
    const headers = req.headers;
    const params = req.params;

    const token: Jwt | any = headers.authorization?.replace(/Bearer |'/g, '');
    const { id } = params

    //decodificar token
    const user: JwtPayload | any = await linkServices.decodeToken(token);
    
    const link: JwtPayload | any = await linkServices.getById(+id)

    //verificar se o link pertence ao usuário que está fazendo a requisição
    await linkServices.checkUserLinkMatch(link?.userId, user.id);

    //deletar registro
    await linkServices.deleteById(+id);

    return res.status(202).send('Link deleted.');
}

export {
    insert,
    getAll,
    editById,
    deleteById
}