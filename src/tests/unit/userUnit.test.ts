import * as userServices from "../../services/userServices.js";
import * as userRepository from "../../repositories/userRepository.js";
import { faker } from "@faker-js/faker";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

const id = faker.datatype.number(10);
const email = faker.internet.email();
const password = faker.datatype.string();
const confirm = faker.datatype.string();

describe(`TESTING: userServices`, () => {

    it(`
        TEST: checkPasswordConfirmation
        EXPECTED: Must return an error if password and confirm password are different.
    `,  async () => {

        const promise = userServices.checkPasswordConfirmation(password, confirm);

        expect(promise).rejects.toMatchObject(
            {
                "message": "_Please confirm your password correctly_",
                "type": "password_and_confirm_password_do_not_match"
            }
        )
    });

    it(`
        TEST: checkEmailAvailability
        EXPECTED: Must return an error if the email is already registered.
    `, async () => {

        jest.spyOn(userRepository, "findByEmail").mockResolvedValueOnce({ id, email, password });

        const promise = userServices.checkEmailAvailability(email);

        expect(promise).rejects.toMatchObject(
            {
                type: "invalid_email",
                message: "_This email is already in use_"
            }
        )

    })

    it(`
        TEST: insertUser
        EXPECTED: Must call insertUser function on registering new user.
    `, async () => {

        jest.spyOn(userRepository, 'insert').mockResolvedValueOnce;

        await userServices.insertUser(email, password);

        expect(userRepository.insert).toBeCalled();
    })

    it(`
        TEST: getUserByEmail
        EXPECTED: Must return id and email from user.
    `, async () => {

        jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce({id, email, password});

        const promise = userServices.getUserByEmail(email);

        expect(promise).resolves.toMatchObject({
            id,
            email
        })
    })

    it(`
        TEST: checkEmailRegister
        EXPECTED: Must return an error if the email is not registered yet.
    `, async () => {

        jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);

        const promise = userServices.checkEmailRegister(email);

        expect(promise).rejects.toMatchObject({
            type: 'unknown_email',
            message: '_Unknown email. Please register first and try again_'
        })
    })

    it(`
        TEST: checkPasswordAtLogin
        EXPECTED: Must return an error if password is not correct.
    `, async () => {
        
        jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce({id, email, password});
        
        jest.spyOn(bcrypt, 'compareSync').mockImplementationOnce(() => {return false})

        const promise = userServices.checkPasswordAtLogin(email, password);

        expect(promise).rejects.toMatchObject({
            type: "invalid_password",
            message: "_Please type your password correctly_"
        })
    })

    it(`
        TEST: createUserToken
        EXPECT: Must return a token based on email from user.
    `, async () => {

        jest.spyOn(jsonwebtoken, 'sign').mockImplementationOnce(() => {return 'this-is-a-test-token'});

        const token = userServices.createUserToken(id, email);

        expect(jsonwebtoken.sign).toBeCalled();
        expect(token).not.toBeNull();
    })
})