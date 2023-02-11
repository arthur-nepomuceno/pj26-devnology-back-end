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
}

async function editById(userId: number, id: number, url?: string, title?: string, description?: string) {
}

async function deleteById(userId: number, id: number) {
}

export {
    decodeToken,
    insertLink,
    getAll,
    editById,
    deleteById
}