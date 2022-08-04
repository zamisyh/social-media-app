const { loginSchema, registerSchema } = require('./auth.validation')

exports.registerList = (req, res, next) => {
    const {result, error} = registerSchema.validate(req.body);
    (error === undefined) ? next() : res.send({message: error.message}).status(304);
     
}

exports.loginList = (req, res, next) => {
    const {result, error} = loginSchema.validate(req.body);
    (error === undefined) ? next() : res.send({message: error.message}).status(304);
}