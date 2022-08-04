const { jwt } = require('../../libs/package')

exports.generateJWTToken = (data) => {
    return jwt.sign({data}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}