const result = require('../helpers/templates/wrap-response')
const UserModel = require('../models/user.model')

exports.userRegisterService = async (req, res) => {
    const { username, password, first_name, last_name } = req.body

    const newUser = new UserModel({
        username,
        password,
        first_name,
        last_name
    })

    try {
        await newUser.save()
        return res.status(201).json(result(201, true, newUser, 'Successfully create user'))
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}