import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link, ListGroupItem } from "react-router-dom";

const Post = ({ post, comments }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
        </Link>
        <hr />
        <p className="text-left">
          <strong>Comments </strong>
        </p>
        {post.comments.map((c) => (
          <p className="text-left">{c.message}</p>
        ))}
      </CardBody>
    </Card>
  );
};

export default Post;
