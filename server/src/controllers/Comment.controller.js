const PostModel = require('../models/Post.model');
const UserModel = require('../models/User.model');
const CommentModel = require('../models/Comment.model');

const CommentController = {
    create: async (req, res) => {
        const { post, user, message } = req.body;

        try {
            const PostExist = await PostModel.findOne({ post });
            if (!PostExist) return res.status(404).json({ message: 'Ce post n\'existe pas' });

            const UserExist = await UserModel.findOne({ user });
            if (!UserExist) return res.status(404).json({ message: 'Vous devez vous connecter' });

            res.status(200).json({ message: message });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    update: async (req, res) => {
        const { comment, user, message } = req.body;

        try {
            const CommentExist = await CommentModel.findOne({ _id:comment, user });
            if (!CommentExist) return res.status(404).json({ message: 'Ce commentaire n\'existe pas' });

            res.status(200).json({ message: message });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    delete: async (req, res) => {
        const { comment, user } = req.body;

        try {
            const CommentExist = await CommentModel.findOne({ _id:comment, user });
            if (!CommentExist) return res.status(404).json({ message: 'Ce commentaire n\'existe pas' });

            res.status(200).json({ message: 'Commentaire supprimé'})
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = CommentController;