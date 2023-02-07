import Joi from "joi";

const signUpSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(22).required(),
    confirm: Joi.string().required()
})

const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export {
    signUpSchema,
    logInSchema
}