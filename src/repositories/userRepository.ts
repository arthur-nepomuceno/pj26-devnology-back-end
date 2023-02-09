import prisma from "../database";

async function findByEmail(email: string){
    return await prisma.users.findFirst({
        where: {
            email
        }
    });
}

async function insert(email: string, password: string){
    return await prisma.users.create({
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