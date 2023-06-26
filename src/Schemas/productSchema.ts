import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    pictureURL: joi.string().required(),
    buyPrice: joi.number().required(),
    sellPrice: joi.number().required
}).options({abortEarly: false});

export default productSchema;