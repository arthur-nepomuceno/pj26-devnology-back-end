import prisma from "../database";

async function insert(userId: number, url: string, title: string, description: string) {
    return await prisma.links.create({
        data: {
            userId,
            url,
            title,
            description
        }
    })
}

async function getAll(userId: number) {    
}

async function editById(userId: number, id: number) {
}

async function deleteById(userId: number, id: number) {
}

export {
    insert,
    getAll,
    editById,
    deleteById
}