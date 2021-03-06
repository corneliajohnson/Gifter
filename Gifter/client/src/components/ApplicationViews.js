import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostSearch } from "./PostSearch";
import { PostProvider } from "./PostProvider";
import PostDetails from "./PostDetails";
import { UserPosts } from "./UserPosts";
import Login from "./Login";
import Register from "./Register";
import { UserProfileProvider } from "../providers/UserProfileProvider";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/login">
        <UserProfileProvider>
          <Login />
        </UserProfileProvider>
      </Route>

      <Route path="/register">
        <UserProfileProvider>
          <Register />
        </UserProfileProvider>
      </Route>

      <Route path="/" exact>
        <PostProvider>
          <PostSearch />
          <PostList />
        </PostProvider>
      </Route>

      <Route path="/posts/add">
        <PostProvider>
          <PostForm />
        </PostProvider>
      </Route>

      <Route path="/posts/:id">
        <PostProvider>
          <PostDetails />
        </PostProvider>
      </Route>

      <Route path="/user/:id">
        <PostProvider>
          <UserPosts />
        </PostProvider>
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
