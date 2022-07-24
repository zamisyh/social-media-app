const result = require('../helpers/templates/wrap-response')
const UserModel = require('../models/user.model')
const { bcrypt } = require('../libs/package')
const { hashPassword, comparePassword } = require('../helpers/bcrypt')

exports.userRegisterService = async (req, res) => {
    const { username, password, first_name, last_name } = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await hashPassword(password, salt)

    const newUser = new UserModel({
        username,
        password: hash,
        first_name,
        last_name
    })

    try {
        await newUser.save()
        return res.status(201).json(result(201, true, newUser, 'Successfully create user'))
    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}

exports.userLoginService = async (req, res, next) => {
    const { username, password } = req.body
    
    try {
        const user = await UserModel.findOne({username: username})

        if (user) {
            const checkPassword = await comparePassword(password, user.password)
            
            checkPassword ? 
                res.status(200).json(result(200, true, user, 'Succesfully login'))
            : res.status(500).json(result(500, false, [], error.message))
        }else{
            res.status(500).json(result(500, false, [], error.message))
        }

    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))

    }
}