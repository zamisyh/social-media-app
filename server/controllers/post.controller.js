const { 
    createPostService, 
    getPostIdService, 
    updatePostIdService,
    deletePostIdService
} = require("../services/post.service");


exports.createPost = createPostService
exports.getIdPost = getPostIdService
exports.updatePostId = updatePostIdService
exports.deletePostId = deletePostIdService