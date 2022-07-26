const { 
    getUserIdService, 
    updateUserIdService, 
    deleteUserIdService, 
    getAllUserService, 
    followUserService,
    unfollowUserService
} = require("../services/user.service");

exports.getUserId = getUserIdService
exports.updateUserId = updateUserIdService
exports.deleteUserId = deleteUserIdService
exports.getAllUser = getAllUserService
exports.followUser = followUserService
exports.unfollowUser = unfollowUserService