const PostModel = require('../models/Post.model');
const UserModel = require('../models/User.model');

const PostController = {
  readPost: async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createPost: async (req, res) => {
    const { message, picture } = req.body;
    try {
      const post = await PostModel.create({ message, picture });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updatePost: async (req, res) => {
    const { id } = req.params;
    const { message, picture } = req.body;
    try {
      const post = await PostModel.findByIdAndUpdate(id, { message, picture });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      // verify owner post
      await PostModel.findByIdAndDelete(id);
      res.status(200).json({ message : 'post deleted'});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  likePost: async (req, res) => {
    const { id } = req.params;
    const { liker } = req.body;
    try {
      const post = await PostModel.findByIdAndUpdate(id, { $push: { likes: liker } });
      await UserModel.findByIdAndUpdate(liker, { $push: { likes: id }});
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  unlikePost: async (req, res) => {
    const { id } = req.params;
    const { liker } = req.body;
    try {
      const post = await PostModel.findByIdAndUpdate(id, { $pull: { likes: liker } });
      await UserModel.findByIdAndUpdate(liker, { $pull: { likes: id }});
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PostController;