// import "../styles/post.css";
import React, { useState } from "react";
import PostButton from "./PostButton.js";
import PostLike from "./PostLike.js";

//Encadré contenant un poste
const PostCard = ({ post }) => {
  const { picture, user, message } = post;

  //Retour
  return (
    <div className="postCard">
      <a align="left" href={picture}></a>

      <div className="postContent">
        <h3>
          {user.pseudo} <PostLike />
        </h3>
        <div className="postMessage">
          <p>{message}</p>
          <PostButton />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
