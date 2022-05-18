const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true
        },
        message: {
            type: String
        },
        picture: {
            type: String
        },
        likes: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
                }
            ],
            default: []
        },
        comments: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'comment'
                }
            ],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel