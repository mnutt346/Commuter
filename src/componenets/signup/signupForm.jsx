import React from "react";

const SignUpForm = props => (
  <form className="sign-up-form">
    <div className="sign-up-heading-containter">
      <h3 className="sign-up-heading">Sign Up</h3>
    </div>
    Email <input type="text" name="email" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <button name="signUpButton" onClick={props.handleSubmit}>
      Sign Up
    </button>
  </form>
);

export default SignUpForm;
