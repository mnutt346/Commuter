import React from "react";
import LoginForm from "./loginForm.jsx";
import Axios from "axios";

class LogIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    console.log(email, password);
    // Axios.post("/LogIn", {
    //   email: email,
    //   password: password
    // });
  };

  render() {
    return (
      <div className="calculator-container">
        <LoginForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LogIn;
