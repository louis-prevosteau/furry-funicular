import React, { Fragment, useEffect, useState } from "react";
import usePosts from "../api/post.api";
import PostCard from "../components/post/PostCard";
import "../styles/post.css";
// import { UidContext } from "../components/AppContext";

//-------------

//-------------

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const uid = useContext(UidContext);
  const { readPosts } = usePosts();

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

  return (
    <Fragment>
      {posts.map((post, index) => (
        <PostCard key={`post-${index}`} post={post} />
      ))}
    </Fragment>
  );
};

export default Posts;
