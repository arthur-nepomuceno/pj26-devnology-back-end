import * as linkRepository from "../repositories/linkRepository";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function decodeToken(token: string) {
    const secret: string | any = process.env.JWT_SECRET;
    const check = jsonwebtoken.verify(token, secret);
    if(check) return jsonwebtoken.decode(token);
}

async function insertLink(userId: number, url: string, title: string, description: string) {
    return await linkRepository.insert(userId, url, title, description);
}

async function getAll(userId: number) {
    return await linkRepository.getAll(userId);
}

async function getById(id: number){
    return await linkRepository.getById(id);
}

async function checkUserLinkMatch(linkUserId: number, userId: number){
    if(linkUserId !== userId) throw {
        type: "invalid_user_link_match",
        message: "_The link you are trying to alter is not yours or does not exist_"
    }

    return;
}

async function editById(id: number, userId: number, url?: string, title?: string, description?: string) {
    return await linkRepository.editById(id, userId, url, title, description);
}

async function deleteById(id: number) {
    return await linkRepository.deleteById(id);
}

export {
    decodeToken,
    insertLink,
    getAll,
    getById,
    checkUserLinkMatch,
    editById,
    deleteById
}