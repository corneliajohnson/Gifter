import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { PostContext } from "./PostProvider";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [post, setPost] = useState({});

  const handleControlledInputChange = (event) => {
    const newPost = { ...post };
    newPost[event.target.name] = event.target.value;
    setPost(newPost);
  };

  const handleClickNewPost = (event) => {
    event.preventDefault();
    if (
      post.title === "" ||
      post.imageUrl === "" ||
      post.dateCreated === null
    ) {
      window.alert("Please fill in required fields");
    } else {
      addPost({
        title: post.title,
        imageUrl: post.imageUrl,
        dateCreated: post.dateCreated,
        caption: post.caption ? post.caption : null,
        userProfileId: 1,
      });
    }
  };

  return (
    <>
      <h3 className="mt-5">Add a Post</h3>
      <div className="container w-50 card mb-5">
        <Form className="p-3">
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                onChange={handleControlledInputChange}
                name="title"
                type="text"
                id="postTitle"
                required
                autoFocus
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="imageUrl" className="text-left" sm={4}>
              Url Image
            </Label>
            <Col sm={8}>
              <Input
                onChange={handleControlledInputChange}
                name="imageUrl"
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="Url"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="text-left" for="caption" sm={4}>
              Date Created
            </Label>
            <Col sm={8}>
              <Input
                onChange={handleControlledInputChange}
                type="date"
                name="dateCreated"
                id="dateCreated"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="text-left" for="caption" sm={4}>
              Caption
            </Label>
            <Col sm={8}>
              <Input
                onChange={handleControlledInputChange}
                type="caption"
                name="caption"
                id="caption"
                placeholder="Caption"
              />
            </Col>
          </FormGroup>
          <Button onClick={handleClickNewPost}>Submit</Button>
        </Form>
      </div>
    </>
  );
};
export default PostForm;
