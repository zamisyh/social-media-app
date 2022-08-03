const PostModel = require('../models/post.model')
const UserModel = require('../models/user.model')
const { mongoose } = require('../libs/package')
const result = require('../helpers/templates/wrap-response')

// create new posts
exports.createPostService = async (req, res, next) => {
    const post = new PostModel(req.body)
    
    try {
        await post.save()
        return res.status(201).json(result(201, true, post, 'Succesfully created posts'))
    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}

//get id posts
exports.getPostIdService = async (req, res, next) => {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        return res.status(200).json(result(200, true, post, 'Succesfully fetch data'))
    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}

//update posts
exports.updatePostIdService = async (req, res, next) => {
    const post_id = req.params.id
    
    try {
        const post = await PostModel.findById(post_id)
        if (post.user_id === req.body.user_id) {
            await post.updateOne({
                $set: req.body
            })

            return res.status(200).json(result(200, true, post, 'Post succesfully updated'))
        } else {
            return res.status(403).json(result(403, false, [], 'Action Forbidden'))
        }

    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}

//delete posts
exports.deletePostIdService = async (req, res, next) => {
    const post_id = req.params.id

    try {
        const post = await PostModel.findById(post_id)
        if (post.user_id === req.body.user_id) {
            await post.deleteOne()
            return res.status(200).json(result(200, true, post, 'Succesfully deleted posts'))

        } else {
            return res.status(403).json(result(403, false, [], 'Action Forbidden'))
        }

    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))

    }
}


//like post
exports.likePostService = async (req, res, next) => {
    const post_id = req.params.id

    try {
        const post = await PostModel.findById(post_id)

        if (!post.likes.includes(req.body.user_id)) {
            await post.updateOne({
                $push: { likes: req.body.user_id }
            })

            return res.status(200).json(result(200, true, post, 'Post liked'))
        }else{
            await post.updateOne({
                $pull: { likes: req.body.user_id }
            })

            return res.status(200).json(result(200, true, post, 'Post Unliked'))

        }
    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}

exports.getTimelinePostService = async (req, res, next) => {
    const user_id = req.params.id

    try {
        
        const currentUserPost = await PostModel.find({user_id: user_id})
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(user_id)
                }
            }, {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "user_id",
                    as: "followingPosts"
                }
            }, {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])

        return res.status(200).json(result(200, true, currentUserPost.concat(...followingPosts), 'Succesfully fetch data'))

    } catch (error) {
        return res.status(500).json(result(500, false, [], error.message))
    }
}