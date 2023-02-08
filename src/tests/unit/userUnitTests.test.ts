import * as userServices from "../../services/userServices";
import { faker } from "@faker-js/faker";

describe(`TESTING: userServices.ts`, () => {

    it(`
        TEST: checkConfirmPassword
        EXPECTED: Must return an error if password and confirm password are different.
    `, async () => {
        const password = faker.datatype.string();
        const confirm = faker.datatype.string();
        
        const promise = userServices.checkConfirmPassword(password, confirm);
        
        expect(promise).rejects.toMatchObject(
            {
                "message": "_Please confirm your password correctly_", 
                "type": "password_and_confirm_password_do_not_match"
            }
        )
    });

    it.todo(`
        TEST: checkEmailAvailability
        EXPECTED: Must return an error if the email is already registered.
    `)
})