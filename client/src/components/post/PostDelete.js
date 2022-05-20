import { Fragment } from "react";
import "../../styles/post.css";
import React, { useState, useEffect } from "react";
import { usePosts } from "../../api/post.api.js";

//Encadré contenant un poste
const postDelete = (props, userId, posterId) => {
  return (
    <Fragment>
      {userId != posterId && (
        <button
          className="button2"
          name={props.text}
          value={props.text}
          onClick={props.url}
        >
          {props.text}
        </button>
      )}
    </Fragment>
  );
};

export default postDelete;
