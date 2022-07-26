const { 
    getUserIdService, 
    updateUserIdService, 
    deleteUserIdService, 
    getAllUserService, 
    followUserService
} = require("../services/user.service");

exports.getUserId = getUserIdService
exports.updateUserId = updateUserIdService
exports.deleteUserId = deleteUserIdService
exports.getAllUser = getAllUserService
exports.followUser = followUserService