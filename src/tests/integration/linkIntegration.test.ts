import prisma from "../../database.js"
import { newUser } from "../../factories/userFactory.js";
import { newLink } from "../../factories/linkFactory.js";
import { Users } from "@prisma/client";
import supertest from "supertest";
import app from "../../app.js";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const agent = supertest(app);

let userRegister: Users | any;
let token: string;
beforeAll(async () => {
    const { email, password } = newUser;

    await prisma.$queryRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$queryRaw`TRUNCATE TABLE links`;

    await prisma.$queryRaw`INSERT INTO users(email, password) VALUES(${email}, ${password})`;
    userRegister = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${email}`;

    const secret: string | any = process.env.JWT_SECRET;

    token = jsonwebtoken.sign({
        id: userRegister[0].id,
        email: userRegister[0].email
    }, secret)
})

describe(`
    END-POINT: post/insertlink
    TESTING: adding a new link to the database.
`, () => {

    it(`
        TEST CASE: invalid token.
        EXPECTED: Must return status 500.
    `, async () => {

        const my_fake_token = 'my_fake_token';
        const response = await agent.post('/insertlink')
            .set('Authorization', `Bearer ${my_fake_token}`)
            .send(newLink);

        expect(response.statusCode).toBe(500);
    })

    it(`
        TEST CASE: user successfully adds a link to the database.
        EXPECTED: Must return status 201.
    `, async () => {

        const response = await agent.post('/insertlink')
            .set('Authorization', `Bearer ${token}`)
            .send(newLink);

        expect(response.statusCode).toBe(201);
    })

})