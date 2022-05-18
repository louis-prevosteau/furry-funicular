const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Types.ObjectId,
            ref: 'post',
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const CommentModel = mongoose.model('comment', CommentSchema);

module.exports = CommentModel;
