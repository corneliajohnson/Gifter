import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ post, comments }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <strong>{post.title}</strong>
        </p>
        <hr />
        <p className="text-left">
          <strong>Comments </strong>
        </p>
        {comments.length === 0 ? (
          <p className="text-left">None</p>
        ) : (
          comments.map((c) => (
            <p className="text-left" key={c.id}>
              {c.userProfile.name}: {c.message}
            </p>
          ))
        )}
      </CardBody>
    </Card>
  );
};

export default Post;
