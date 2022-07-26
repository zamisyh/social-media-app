const result = require('../helpers/templates/wrap-response');
const UserModel = require('../models/user.model')
const { bcrypt } = require('../libs/package');
const { hashPassword } = require('../helpers/bcrypt');


//get all user
exports.getAllUserService = async (req, res, next) => {
    try {
        const user = await UserModel.find({}).select(["-password"])
        return res.status(200).json(result(200, true, user, "Succesfully fetch all data user"))
    } catch (error) {
        return res.status(404).json(result(404, false, [], err.message))
    }
}

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
        return res.status(500).json(result(500, false, [], "Access danied! You can only update your own profile"))
    }
}

//delete user id
exports.deleteUserIdService = async (req, res, next) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus } = req.body

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            const user = await UserModel.findByIdAndDelete(id)
            return res.status(200).json(result(200, true, user, "Succesfully delete account"))
        } catch (error) {
            return res.status(500).json(result(500, false, [], error.message))
        }
    } else {
        return res.status(500).json(result(500, false, [], "Access danied! You can only delete your own profile"))
    }
}

//follow a user
exports.followUserService = async (req, res, next) => {
    const id = req.params.id
    const { currentUserId } = req.body

    if (currentUserId === id) {
        return res.status(403).json(result(403, false, [], "Action Forbidden"))
    } else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({
                    $push: {followers: currentUserId}
                })
                await followingUser.updateOne({
                    $push: {following: id}
                })

                return res.status(200).json("User Followed!")

            } else {
                return res.status(403).json("User is already followed!")

            }
        } catch (error) {
            return res.status(500).json(result(500, false, [], error.message))
        }
    }

}