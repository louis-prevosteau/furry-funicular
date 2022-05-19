const CommentModel = require("../models/Comment.model");

const CommentService = {
    createComment: async ({ post, user, message }) => {
        return await CommentModel.create({ post, user, message });
    },

    updateComment: async (id, { message }) => {
        return await CommentModel.findByIdAndUpdate(id, { message });
    },

    deleteCOmment: async (id) => {
        await CommentModel.findByIdAndDelete(id);
    },

};

module.exports = CommentService;