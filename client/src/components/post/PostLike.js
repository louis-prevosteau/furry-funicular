import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import "../../styles/post.css";
import usePosts from "../../api/post.api.js";

const PostLike = ({ id, data, text }) => {
  const { like } = usePosts();

  return (
    <Fragment>
      <button
        className="button1"
        name={"Like"}
        value={"Like"}
        onClick={() => like(id, data)}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default PostLike;
