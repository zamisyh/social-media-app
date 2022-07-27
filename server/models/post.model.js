const { mongoose } = require('../libs/package')

const PostModel = new mongoose.Schema({
    user_id: { type: String, requred: true },
    description: String,
    likes: [],
    image: String,

}, {
    timestamps: true
})

module.exports = mongoose.model('Posts', PostModel)