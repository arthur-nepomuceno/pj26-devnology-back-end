import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";

async function checkConfirmPassword(password: string, confirm: string) {
    if(password !== confirm) throw {
        type: "password_and_confirm_password_do_not_match",
        message: "_Please confirm your password correctly_"
    };

    return;
}

async function checkEmailAvailability(email: string) {
    const response = await userRepository.findByEmail(email);

    if(response) throw {
        type: "invalid_email",
        message: "_This email is already in use_"
    }
    
    return;
}

async function hidePassword(password: string) {
    return bcrypt.hashSync(password, 13);
}

async function insertUser(email: string, password: string) {
    return userRepository.insert(email, password);
}

export {
    checkEmailAvailability,
    checkConfirmPassword,
    hidePassword,
    insertUser,
}