import React, { useState } from "react";
import PostButton from "./PostButton.js";
import PostLike from "./PostLike.js";
import PostDelete from "./PostDelete.js";
import "../../styles/post.css";
// import "../post.css";
<div className="mediumspacetop"></div>;
//Encadré contenant un poste
const PostCard = ({ post }) => {
  const { picture, user, message } = post;

  //Retour
  return (
    <div className="PostCard">
      <div align="center" className="PostCard">
        <div className="PostContent">
          <div>
            <img className="PostPicture" align="left" src={picture}></img>
          </div>
          <h3 className="PostTopLine">
            {user.pseudo}{" "}
            <PostLike
              id={post._id}
              text="Like"
              data={localStorage.getItem("userId")}
            />
            <PostDelete
              text="Supprimer"
              userId={localStorage.getItem("userId")}
              posterId={user._id}
            />
          </h3>
          <div className="PostMessage">
            <p>{message}</p>
            <PostButton text="Commenter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
