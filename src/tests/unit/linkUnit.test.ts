import * as linkServices from "../../services/linkServices";
import * as linkRepository from "../../repositories/linkRepository";
import * as userServices from "../../services/userServices";
import jsonwebtoken from "jsonwebtoken";
import { link, token, decoded } from "../factories/linkFactory";
import { newUser } from "../factories/userFactory";
import prisma from "../../database";
import { Users } from "@prisma/client";

let userRegister: Users | any;
beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE links`;

    await userServices.insertUser(newUser.email, newUser.password);
    userRegister = await userServices.getUserByEmail(newUser.email);      
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
        
        await linkServices.insertLink(userRegister.id, link.url, link.title, link.description);

        expect(linkRepository.insert).toBeCalled();
    })
})

afterAll(async () => {
    await prisma.$disconnect();
})