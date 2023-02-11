import supertest from "supertest";
import app from "../../app";
import prisma from "../../database";
import { newUser } from "../factories/userFactory";

const agent = supertest(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
})

describe(`
    END-POINT: post/signup
    TESTING: Create new user.
`, () => {

    it(`
        TEST CASE: Password and confirm password inputs are different.
        EXPECTED: Must return status 409.
    `, async () => {
        const response = await agent.post('/signup').send({
            email: newUser.email,
            password: newUser.password,
            confirm: 'intentionally_different_password'
        });

        expect(response.statusCode).toBe(409);
    });
    
    it(`
        TEST CASE: Email already exists at the database.
        EXPECTED: Must return status 406. 
    `, async () => {
        await agent.post('/signup').send(newUser);
        
        const response = await agent.post('/signup').send(newUser);

        expect(response.statusCode).toBe(406)
    });
    
    it(`
        TEST CASE: Creating a new user.
        EXPECTED: Must return status 201.
    `, async () => {

        const response = await agent.post('/signup').send(newUser);

        expect(response.statusCode).toBe(201);
    });

})

describe(`
    END-POINT: post/login
    TESTING: User access to the system.
`, () => {

    it(`
        TEST CASE: Login with wrong password.
        EXPECTED: Must return status 409.
    `, async () => {
        
        await agent.post('/signup').send({
            email: newUser.email,
            password: newUser.password,
            confirm: newUser.confirm
        });

        const response = await agent.post('/login').send({
            email: newUser.email,
            password: 'my-intentionally-wrong-password'
        });

        expect(response.statusCode).toBe(409);
    });
    
    it(`
        TEST CASE: Login with non registered email.
        EXPECTED: Must return status 406.
    `,async () => {
        
        const response = await agent.post('/login').send({
            email: newUser.email,
            password: newUser.password
        })

        expect(response.statusCode).toBe(406);
    });
    
    it(`
        TEST CASE: User logs in successfully.
        EXPECTED: Must return status 200 and return a token.
    `, async () => {

        await agent.post('/signup').send(newUser);

        const response = await agent.post('/login').send({
            email: newUser.email,
            password: newUser.password
        })

        expect(response.statusCode).toBe(200);
        expect(response.body.token).not.toBeNull();
    });

})

afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
    await prisma.$disconnect()
})