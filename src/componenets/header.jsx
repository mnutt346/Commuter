import React from "react";
import Navbar from "./navbar.jsx";

const Header = props => (
  <div className="header-container">
    <div className="header">COMMUTER</div>
    <Navbar
      isAuthenticated={props.isAuthenticated}
      handleLogout={props.handleLogout}
    />
  </div>
);

export default Header;
