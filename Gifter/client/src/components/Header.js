import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   fetch(`/api/userprofile/${1}`)
  //     .then((res) => res.json())
  //     .then((user) => setUser(user));
  // }, []);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        GiFTER
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            New Post
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to={`/user/1`} className="nav-link">
            {user.name}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
