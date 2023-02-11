import * as linkServices from "../../services/linkServices";
import * as linkRepository from "../../repositories/linkRepository";
import jsonwebtoken from "jsonwebtoken";
import prisma from "../../database";
import { newLink, token, decoded } from "../factories/linkFactory";
import { newUser } from "../factories/userFactory";
import { Users } from "@prisma/client";

let userRegister: Users | any;
beforeAll(async () => {
    const {email, password} = newUser;

    await prisma.$queryRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$queryRaw`TRUNCATE TABLE links`;

    await prisma.$queryRaw`INSERT INTO users(email, password) VALUES(${email}, ${password})`;
    userRegister = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${email}`;
});

describe(`TESTING: linkservices`, () => {
    
    it(`
        TEST: decodeToken,
        EXPECTED: Must return an object containing id and email from user.
    `, async () => {

        jest.spyOn(jsonwebtoken, 'verify').mockImplementationOnce(() => {return true});

        const promise = linkServices.decodeToken(token);

        expect(promise).resolves.toMatchObject(decoded);
    })

    it(`
        TEST: insert,
        EXPECTED: Must call the insert function ecxatly once.
    `, async () => {

        jest.spyOn(linkRepository, 'insert').mockResolvedValueOnce;
        
        await linkServices.insertLink(userRegister[0].id, newLink.url, newLink.title, newLink.description);

        expect(linkRepository.insert).toBeCalled();
    })
})

afterAll(async () => {
    await prisma.$disconnect();
})