import React from "react";

const LoginForm = props => (
  <form className="log-in-form">
    <div className="log-in-heading-containter">
      <h3 className="log-in-heading">Log In</h3>
    </div>
    Email <input type="text" name="email" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <button name="logInButton" onClick={props.handleSubmit}>
      Log In
    </button>
  </form>
);

export default LoginForm;
