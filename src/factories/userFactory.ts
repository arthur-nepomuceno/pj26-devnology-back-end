import { faker } from "@faker-js/faker";

const id = faker.datatype.number(99);
const email = faker.internet.email();
const password = faker.datatype.string(8);

const newUser = {
    email: email,
    password: password,
    confirm: password
}

const registeredUser = {
    id: id,
    email: email,
    password: password,
}

export {
    newUser,
    registeredUser
}