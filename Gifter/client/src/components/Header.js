import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("userProfile"));
  const { logout } = useContext(UserProfileContext);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        GiFTER
      </Link>
      <ul className="navbar-nav mr-auto">
        {user ? (
          <>
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
            <li className="nav-item">
              <Link onClick={logout} to="/login" className="nav-link">
                LogOut
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
