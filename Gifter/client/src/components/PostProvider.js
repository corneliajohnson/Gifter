import React, { useState, createContext } from "react";
export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  const addPost = (postObj) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then(getPosts);
  };

  return (
    <PostContext.Provider value={{ posts, getPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
