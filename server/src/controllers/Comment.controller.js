const PostModel = require('../models/Post.model');
const UserModel = require('../models/User.model');
const CommentModel = require('../models/Comment.model');
const CommentService = require('../services/Comment.service');

const CommentController = {
    create: async (req, res) => {
        const { post_id } = req.params;
        const { user, message } = req.body;

        try {
            const PostExist = await PostModel.findOne({ _id: post_id });
            if (!PostExist) return res.status(404).json({ message: 'Ce post n\'existe pas' });

            const UserExist = await UserModel.findOne({ _id: user });
            if (!UserExist) return res.status(404).json({ message: 'Vous devez vous connecter' });

            await CommentService.createComment(post_id, user, message);

            res.status(200).json({ message: message });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    update: async (req, res) => {
        const { comment_id } = req.params;
        const { user, message } = req.body;

        try {
            const CommentExist = await CommentModel.findOne({ _id:comment_id, user });
            if (!CommentExist) return res.status(404).json({ message: 'Ce commentaire n\'existe pas' });

            await CommentService.updateComment(comment_id, message)

            res.status(200).json({ message: message });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    delete: async (req, res) => {
        const { comment_id } = req.params;

        try {
            const CommentExist = await CommentModel.findOne({ _id:comment_id, user });
            if (!CommentExist) return res.status(404).json({ message: 'Ce commentaire n\'existe pas' });

            await CommentService.deletePost(comment_id);

            res.status(200).json({ message: 'Commentaire supprimé'})
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = CommentController;
