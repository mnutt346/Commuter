import React from "react";

const SignUpForm = props => (
  <form className="sign-up-form" action="/SignUp" method="post">
    <div className="sign-up-heading-containter">
      <h3 className="sign-up-heading">Sign Up</h3>
    </div>
    Email <input type="text" name="email" onChange={props.handleInput} />
    Password{" "}
    <input type="password" name="password" onChange={props.handleInput} />
    <input type="submit" name="signUpButton" value="Sign Up" />
  </form>
);

export default SignUpForm;
