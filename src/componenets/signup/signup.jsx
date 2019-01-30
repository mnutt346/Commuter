import React from "react";
import SignUpForm from "./signupForm.jsx";
import Axios from "axios";

class SignUp extends React.Component {
  state = { email: "", password: "" };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    let { email, password } = this.state;
    Axios.post("/SignUp", {
      email: email,
      password: password
    });
  };

  render() {
    return (
      <div className="calculator-container">
        <SignUpForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignUp;
