const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        bio: {
            type: String
        },
        followers: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
                }
            ],
            default: []
        },
        following: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'user'
                }
            ],
            default: []
        },
        likes: {
            type: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: 'post'
                }
            ],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel