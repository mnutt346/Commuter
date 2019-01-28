import React from "react";

const SignUpForm = props => (
  <form className="sign-up-form">
    <div className="sign-up-heading-containter">
      <h3 className="sign-up-heading">Sign Up</h3>
    </div>
    Username <input type="text" name="Username" />
    Password <input type="password" name="Password" />
    <div className="button-container">
      <button name="signUpButton">Sign Up</button>
    </div>
  </form>
);

export default SignUpForm;
