import prisma from "../database";

async function findByEmail(email: string){
    return prisma.users.findFirst({
        where: {
            email
        }
    });
}

async function insert(email: string, password: string){
    return prisma.users.create({
        data: {
            email,
            password
        }
    })
}

export {
    findByEmail,
    insert
}