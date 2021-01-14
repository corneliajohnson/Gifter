import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "./PostProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
import Post from "./Post";

const PostDetails = () => {
  const { getPostById } = useContext(PostContext);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPostById(id).then((post) => setPost(post));
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Post post={post} />
          <ListGroup>
            {post.comments.map((c) => (
              <ListGroupItem key={c.id}>{c.message}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
