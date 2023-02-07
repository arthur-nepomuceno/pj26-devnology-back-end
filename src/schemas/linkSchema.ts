import Joi from "joi";

const linkSchema = Joi.object({
    url: Joi.string().uri().required(),
    title: Joi.string().required()
})

export {
    linkSchema
}