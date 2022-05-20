import React, { Fragment, useEffect, useState } from "react";
import usePosts from "../api/post.api";
import PostCard from "../components/post/PostCard";
import { useUser } from "../api/user.api";
// import { NavLink } from "react-router-dom";
// import { UidContext } from "../components/Routes/AppContext";
import "../styles/post.css";

// import "../post.css";
// import { uid, UidContext } from "../components/AppContext";

//-------------

//-------------

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const uid = useContext(UidContext);
  const { readPosts } = usePosts();
  // const uid = useContext(UidContext);
  const { getUser } = useUser();

  useEffect(() => {
    readPosts()
      .then((data) => {
        setPosts(data);
        console.log("DATA", data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  // if (uid === post.posterId) {
  // }

  return (
    <Fragment>
      {posts.map((post, index) => (
        <PostCard key={`post-${index}`} post={post} />
      ))}
    </Fragment>
  );
};

export default Posts;
