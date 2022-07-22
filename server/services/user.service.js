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
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}