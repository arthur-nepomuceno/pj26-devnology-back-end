import * as linkRepository from "../repositories/linkRepository";

async function decodeToken(token: string) {
}

async function insert(userId: number, url: string, title: string, description: string) {
}

async function getAll(userId: number) {
}

async function editById(userId: number, id: number, url?: string, title?: string, description?: string) {
}

async function deleteById(userId: number, id: number) {
}

export {
    decodeToken,
    insert,
    getAll,
    editById,
    deleteById
}