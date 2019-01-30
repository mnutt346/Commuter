import React from "react";
import SignUpForm from "./signupForm.jsx";
import Axios from "axios";

class SignUp extends React.Component {
  state = { email: "", password: "" };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    console.log("email: ", email, " password: ", password);
    // Axios.post("/signup", {
    //   username: username,
    //   password: password
    // });
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
