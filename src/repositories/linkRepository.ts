import prisma from "../database";

async function insert(userId: number, url: string, title: string, description: string) {
    return await prisma.links.create({
        data: {
            userId,
            url,
            title,
            description
        }
    });
}

async function getAll(userId: number) {
    return await prisma.links.findMany({
        where: {
            userId
        }
    });
}

async function getById(id: number){
    return await prisma.links.findUnique({
        where: {
            id
        }
    })
}

async function editById(id: number, userId: number, url?: string, title?: string, description?: string) {
    await prisma.links.update({
        where: {
            id,
        },
        data: {
            url,
            title,
            description
        }
    })
}

async function deleteById(id: number) {
    await prisma.links.delete({
        where: {
            id
        }
    })
}

export {
    insert,
    getAll,
    getById,
    editById,
    deleteById
}