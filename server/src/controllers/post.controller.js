const PostModel = require('../models/Post.model');
const UserModel = require('../models/User.model');
const PostService = require('../services/Post.service');

const PostController = {
  readPost: async (req, res) => {
    try {
      const posts = await PostService.getPosts();
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createPost: async (req, res) => {
    const { message, picture } = req.body;
    try {
      const post = await PostService.createPost({ message, picture });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updatePost: async (req, res) => {
    const { id } = req.params;
    const { message, picture } = req.body;
    try {
      const post = await PostService.updatePost(id, { message, picture });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      // verify owner post
      await PostService.deletePost(id);
      res.status(200).json({ message : 'post deleted'});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  likePost: async (req, res) => {
    const { id } = req.params;
    const { liker } = req.body;
    try {
      const post = PostService.like(id, { liker });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  unlikePost: async (req, res) => {
    const { id } = req.params;
    const { liker } = req.body;
    try {
      const post = await PostService.unlike(id, { liker });
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PostController;