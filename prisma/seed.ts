import prisma from "../src/database.js";
import bcrypt from "bcrypt";

async function main() {

    await prisma.$queryRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$queryRaw`TRUNCATE TABLE links RESTART IDENTITY`;

    const password = bcrypt.hashSync('admin-devnology', 13);
    
    const admin = {
        email: 'admin@email.com',
        password
    }

    const link = {
        userId: 1,
        url: 'https://devgo.com.br/',
        title: 'Blog DevGo',
        description: 'Um blog para ficar por dentro do mundo da programação e do senvoldimento web.'
    }

    await prisma.users.create({
        data: {
            ...admin
        }
    })

    await prisma.links.create({
        data: {
            ...link
        }
    })
}

main()
.catch(e => {
    console.log(e);
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect();
})