import joi from "joi";

const userSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    telefone: joi.string().min(11).max(12).required()
}).options({abortEarly: false});

export default userSchema;