const result = require('../helpers/templates/wrap-response')
const UserModel = require('../models/user.model')
const { bcrypt } = require('../libs/package')
const { hashPassword, comparePassword } = require('../helpers/bcrypt')
const { generateJWTToken } = require('../middleware/jwt/generate-token.middleware')

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
        const oldUser = await UserModel.findOne({username: username})
        if (oldUser) {
            return res.status(400).json(result(400, false, [], "Username is already registered"))
        } else {
            const user = await newUser.save()
            const token = generateJWTToken({
                username: user.username,
                id: user._id
            })
            return res.status(201).json(result(201, true, user, 'Successfully create user', token))
        }
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

            if (!checkPassword) {
                res.status(400).json(result(400, false, [], "Wrong password"))
            } else {
                const token = generateJWTToken({
                    username: user.username,
                    id: user._id
                })
                res.status(200).json(result(200, true, user, 'Succesfully login', token))
            }
            
        }else{
            res.status(500).json(result(500, false, [], "No User Found"))
        }

    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))

    }
}