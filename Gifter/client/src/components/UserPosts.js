import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "./PostProvider";
import Post from "./Post";

export const UserPosts = () => {
  const { getPostByUserId } = useContext(PostContext);
  const [userPost, setUserPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostByUserId(id).then((post) => setUserPost(post));
  }, []);

  if (!userPost) {
    return null;
  }

  return (
    <div className="container">
      <h2 className="mt-5">{userPost[0]?.userProfile.name}'s Post</h2>
      <div className="row justify-content-center">
        {userPost ? (
          userPost.map((post) => (
            <div className="col-6">
              <Post post={post} />{" "}
            </div>
          ))
        ) : (
          <h2>No Post</h2>
        )}
      </div>
    </div>
  );
};
