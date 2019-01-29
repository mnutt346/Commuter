import React from "react";

const LoginForm = props => (
  <form className="log-in-form">
    <div className="log-in-heading-containter">
      <h3 className="log-in-heading">Log In</h3>
    </div>
    Username <input type="text" name="username" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <button name="logInButton">Sign Up</button>
  </form>
);

export default LoginForm;
