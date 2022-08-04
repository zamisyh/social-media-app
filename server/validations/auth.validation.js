const { joi } = require('../libs/package')

const registerSchema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    first_name: joi.string().required(),
    last_name: joi.string().required()
})

const loginSchema = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required().min(4)
})

module.exports = {
    loginSchema, registerSchema
}