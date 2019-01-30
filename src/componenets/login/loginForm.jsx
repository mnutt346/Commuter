import React from "react";

const LoginForm = props => (
  <form className="log-in-form" action="/LogIn" method="post">
    <div className="log-in-heading-containter">
      <h3 className="log-in-heading">Log In</h3>
    </div>
    Email <input type="text" name="email" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <input type="submit" value="Log In" name="logInButton" />
  </form>
);

export default LoginForm;
