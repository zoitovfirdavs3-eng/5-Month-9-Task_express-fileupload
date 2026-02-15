const Joi = require("joi");

const postValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
});

module.exports = postValidator;