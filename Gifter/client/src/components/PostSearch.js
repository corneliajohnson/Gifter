import React, { useContext } from "react";
import { PostContext } from "./PostProvider";
import { Input } from "reactstrap";

export const PostSearch = () => {
  const { setSearchTerms } = useContext(PostContext);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <Input
            type="text"
            className="w-50"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a post... "
          />
        </div>
      </div>
    </>
  );
};
