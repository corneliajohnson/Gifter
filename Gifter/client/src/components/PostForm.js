import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

const PostForm = () => {
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
              <Input type="text" name="title" id="post-title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="imageUrl" className="text-left" sm={4}>
              Url Image
            </Label>
            <Col sm={8}>
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="Url"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="text-left" for="caption" sm={4}>
              Caption
            </Label>
            <Col sm={8}>
              <Input
                type="caption"
                name="caption"
                id="caption"
                placeholder="Caption"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" className="text-left" sm={4}>
              User
            </Label>
            <Col sm={8}>
              <Input type="select" name="userProfileId" id="userProfileId">
                <option>1</option>
              </Input>
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </>
  );
};
export default PostForm;
