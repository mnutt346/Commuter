import React from "react";
import SignUpForm from "./signupForm.jsx";
import Axios from "axios";

class SignUp extends React.Component {
  state = { username: "", password: "" };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUp = e => {
    e.preventDefault();
    let { username, password } = this.state;
    // Axios.post("/signup", {
    //   username: username,
    //   password: password
    // });
  };

  render() {
    return (
      <div className="calculator-container">
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
