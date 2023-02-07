import { faker } from "@faker-js/faker";

function createUser(){
    const email = faker.internet.email();
    const password = faker.datatype.string(8);

    return {
        email: email,
        password: password,
        confirm: password
    }
}

export {
    createUser
}