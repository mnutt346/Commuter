import React from "react";

const SignUpForm = props => (
  <form className="sign-up-form">
    <div className="sign-up-heading-containter">
      <h3 className="sign-up-heading">Sign Up</h3>
    </div>
    Username <input type="text" name="username" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <button name="signUpButton" onClick={props.handleSignUp}>
      Sign Up
    </button>
  </form>
);

export default SignUpForm;
