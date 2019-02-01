import React from "react";
import LoginForm from "./loginForm.jsx";

const LogIn = props => (
  <div className="calculator-container">
    <LoginForm
      handleInput={props.handleInput}
      handleLogin={props.handleLogin}
    />
  </div>
);

export default LogIn;
