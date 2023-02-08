import supertest from "supertest";
import app from "../app";
import prisma from "../database";
import { createUser } from "./factories/userFactory";

const agent = supertest(app);
const user = createUser();

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`;
})

describe(`
    END-ṔOINT: post/signup
    TESTING: Create new user.
`, () => {

    it('Must return status 409 if password and confirm password inputs are different.', async () => {
        const response = await agent.post('/signup').send({
            email: user.email,
            password: user.password,
            confirm: 'intentionally_different_password'
        });

        expect(response.statusCode).toBe(409);
    });
    
    it('Must return status 406 if the email already exists at the database', async () => {
        await agent.post('/signup').send(user);
        
        const response = await agent.post('/signup').send(user);

        expect(response.statusCode).toBe(406)
    });
    
    it('Must return status 201 and create a new user', async () => {

        const response = await agent.post('/signup').send(user);

        expect(response.statusCode).toBe(201);
    });

})

describe(`
    END-POINT: post/login
    TESTING: User access to the system.
`, () => {

    it.todo('Must return status 200 and return a token if user logs in correctly.');

    it.todo('Must return status 406 if email does not exist at the database');

    it.todo('Must return status 409 if password is incorrect.');

})

afterAll(async () => {
    //await prisma.$executeRaw`TRUNCATE TABLE users`;
    await prisma.$disconnect()
})