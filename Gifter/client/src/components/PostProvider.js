import React, { useState, createContext } from "react";
export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    <PostContext.Provider value={{ posts, getPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
