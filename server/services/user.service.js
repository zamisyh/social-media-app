const result = require('../helpers/templates/wrap-response');
const UserModel = require('../models/user.model')
const { bcrypt } = require('../libs/package');
const { hashPassword } = require('../helpers/bcrypt');

//get a user data id
exports.getUserIdService = async (req, res, next) => {
    const id = req.params.id

    try{
        const user = await UserModel.findById(id).select(["-password", "-is_admin"]);
        if (user) {
            return res.status(201).json(result(201, true, user, 'Succesfully fetch data'))
        } else {
            return res.status(404).json(result(404, false, user, 'No Data Found!'))
        }

    }catch(err) {
        return res.status(500).json(result(500, false, [], err.message))
    }
}

//update user data id
exports.updateUserIdService = async (req, res, next) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus, password } = req.body

    if(id === currentUserId || currentUserAdminStatus){
        try {

            if(password){
                const salt = await bcrypt.genSalt(10)
                req.body.password = await hashPassword(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            return res.status(200).json(result(200, true, user, "Succesfully update data"))

        } catch (error) {
            return res.status(500).json(result(500, false, [], error.message))
        }
    }else{
        return res.status(500).json(result(500, false, [], error.message))
    }
}