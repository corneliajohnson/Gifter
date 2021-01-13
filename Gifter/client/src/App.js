import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { PostProvider } from "./components/PostProvider";
import { PostSearch } from "./components/PostSearch";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <PostSearch />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
