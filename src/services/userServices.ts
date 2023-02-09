import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { Users } from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function checkPasswordConfirmation(password: string, confirm: string) {
    if (password !== confirm) throw {
        type: "password_and_confirm_password_do_not_match",
        message: "_Please confirm your password correctly_"
    };

    return;
}

async function checkEmailAvailability(email: string) {
    const response = await userRepository.findByEmail(email);
    
    if (response) throw {
        type: "invalid_email",
        message: "_This email is already in use_"
    };

    return;
}

async function hidePassword(password: string) {
    return bcrypt.hashSync(password, 13);
}

async function insertUser(email: string, password: string) {
    return userRepository.insert(email, password);
}

async function checkEmailRegister(email: string) {
    const response = await userRepository.findByEmail(email);
    
    if(!response) throw {
        type: 'unknown_email',
        message: '_Unknown email. Please register first and try again_'
    };

    return;
}

async function checkPasswordAtLogin(email: string, password: string) {
    
    const register: Users | any = await userRepository.findByEmail(email);
    
    const check = bcrypt.compareSync(password, register.password);
    
    if(!check) throw {
        type: "invalid_password",
        message: "_Please type your password correctly_"
    };

    return;
}

async function createUserToken(email: string) {
    const secret: string | any = process.env.JWT_SECRET;
    
    const token = jsonwebtoken.sign(email, secret);

    return token;
}

export {
    checkEmailAvailability,
    checkPasswordConfirmation,
    hidePassword,
    insertUser,
    checkEmailRegister,
    checkPasswordAtLogin,
    createUserToken
}