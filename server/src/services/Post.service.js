const PostModel = require("../models/Post.model");
const UserModel = require("../models/User.model");

const PostService = {
    getPosts: async () => {
        return await PostModel.find();
    },

    createPost: async ({ message, picture }) => {
        return await PostModel.create({ message, picture });
    },

    updatePost: async (id, { message, picture }) => {
        return await PostModel.findByIdAndUpdate(id, { message, picture });
    },

    deletePost: async (id) => {
        await PostModel.findByIdAndDelete(id);
    },

    like: async (id, { liker }) => {
        const post = await PostModel.findByIdAndUpdate(id, { $push: { likes: liker } });
        await UserModel.findByIdAndUpdate(liker, { $push: { likes: id }});
        return post;
    },

    unlike: async (id, { liker }) => {
        const post = await PostModel.findByIdAndUpdate(id, { $pull: { likes: liker } });
        await UserModel.findByIdAndUpdate(liker, { $pull: { likes: id }});
        return post;
    }
};

module.exports = PostService;