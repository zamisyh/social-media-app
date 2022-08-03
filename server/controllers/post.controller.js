const { 
    createPostService, 
    getPostIdService, 
    updatePostIdService,
    deletePostIdService,
    likePostService,
    getTimelinePostService
} = require("../services/post.service");


exports.createPost = createPostService
exports.getIdPost = getPostIdService
exports.updatePostId = updatePostIdService
exports.deletePostId = deletePostIdService
exports.likePost = likePostService
exports.getTimelinePost = getTimelinePostService