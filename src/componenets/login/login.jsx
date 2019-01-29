import React from "react";
import LoginForm from "./loginForm.jsx";

class LogIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="calculator-container">
        <LoginForm handleInput={this.handleInput} />
      </div>
    );
  }
}

export default LogIn;
