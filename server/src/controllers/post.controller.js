//Controller des posts
//import {Request, Response} from 'express';

//TODO : Service (Pas nécessaire) - Controller - DTO - Routeur

//Objets
const PostModel = require("../models/post.model"); //Modèle des posts
const UserModel = require("../models/user.model"); //Modèle des users (A qui le post appartient)

//Mongoose
const ObjectID = require("mongoose").Types.ObjectId;

import { PostService } from "-services";

// export class PostController {}

//========= Constructeur =========

const PostController = {
  //Constructeur
  newPost: new postModel({
    posterId: req.body.posterId,
    message: req.body.message,
    picture: req.file !== null ? "./uploads/posts/" + fileName : "",
    likes: req.body.likerId,
    comments: req.body.commenterId,
  }),

  //Getter tous les posts
  getPosts: async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.status(200).json({ posts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Getter post individuel
  getPost: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await PostModel.findById(id);
      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Setter post
  updatePost: async (req, res) => {
    const { id } = req.params;
    const { bio } = req.body;
    try {
      const user = await PostModel.findByIdAndUpdate(id, { message });
      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Deleter
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      await PostModel.findByIdAndDelete(id);
      res.status(200).json({ message: "post deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Like un post
  likePost: async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    try {
      await PostModel.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { likers: req.body.id },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));

      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $addToSet: { likes: req.params.id },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  // Unlike un post
  unlikePost: async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    try {
      await PostModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likes: req.body.id },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));

      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $pull: { likes: req.params.id },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

module.exports = UserController;

//Brouillon
//========= Getter =========

// module.exports.readPost = (req, res) => {
//   PostModel.find((err, docs) => {
//     if (!err) res.send(docs);
//     else console.log("Error to get data : " + err);
//   }).sort({ createdAt: -1 });
// };

//========= Setter =========

//========= Deleter =========

//

// export class Post
// {
// getPost = Async (PostId: String) => {
//     const post = await Post.findById(PostId);

//     return post;
// };

// createPost = async () => {
//         const newPost = new Post();
//         const post = await Post.find();

//         return post;
//     };

// };

// createPost = async () => {
//     const data = createPostData = req.body;
//     const postId = req.param.id;
//     const newPost = new Post();
//     const post = await Post.find();

//     return post;
// };

//DTO
//req: Request, res: Response, next: NextFunction

// export class PostDto {
//     createPost = () => {
//         try {

//         } catch (error) {

//         }
//     };
// }

// service
// createPost = async (PostData)

// export interface CreatePostData {}
// [...]

// await newPost.save();
// return newPost;

// }

// Constructeur (old)
// function Post() {
//   //this.user = "";
//   this.message = "";
// }
