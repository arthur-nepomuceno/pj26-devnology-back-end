import * as userServices from "../../services/userServices";
import * as userRepository from "../../repositories/userRepository";
import { faker } from "@faker-js/faker";

const id = faker.datatype.number(10);
const email = faker.internet.email();
const password = faker.datatype.string();
const confirm = faker.datatype.string();

describe(`TESTING: userServices.ts`, () => {

    it(`
        TEST: checkConfirmPassword
        EXPECTED: Must return an error if password and confirm password are different.
    `,  async () => {

        const promise = userServices.checkConfirmPassword(password, confirm);
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

        userServices.insertUser(email, password);
        expect(userRepository.insert).toBeCalled();
    })
})