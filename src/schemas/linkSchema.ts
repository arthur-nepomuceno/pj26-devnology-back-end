import Joi from "joi";

const linkSchema = Joi.object({
    url: Joi.string().uri().required(),
    title: Joi.string().min(5).max(30).required(),
    description: Joi.string().min(10).max(300).required()
})

export {
    linkSchema
}