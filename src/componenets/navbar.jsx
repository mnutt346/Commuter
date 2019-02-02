import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return props.isAuthenticated ? (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <a onClick={props.handleLogout}>Log Out</a>
    </div>
  ) : (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/SignUp">Sign up</Link>
      <Link to="/LogIn">Log In</Link>
    </div>
  );
};

export default Navbar;
