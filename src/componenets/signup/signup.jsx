import React from "react";
import SignUpForm from "./signupForm.jsx";

class SignUp extends React.Component {
  state = { username: "" };

  render() {
    return (
      <div className="calculator-container">
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
