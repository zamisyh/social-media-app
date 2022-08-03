const { mongoose} = require('../libs/package')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"],
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    picture: String,
    cover_picture: String,
    about: String,
    lives_in: String,
    work_at: String,
    relationship: String,
    followers: [],
    following: []
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)