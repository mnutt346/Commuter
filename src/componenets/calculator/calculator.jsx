import React from "react";
import Form from "./form.jsx";
import Commute from "./commute.jsx";
import Axios from "axios";

class Calculator extends React.Component {
  state = {
    origin: "",
    destination: "",
    departureDate: "",
    departureTime: 0,
    commuteTime: null
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { origin, destination, departureDate, departureTime } = this.state;
    Axios.post("/commute", {
      destination: destination,
      origin: origin,
      departureDate: departureDate,
      departureTime: departureTime
    }).then(response => this.setState({ commuteTime: response.data }));
  };

  render() {
    return (
      <div className="calculator-container">
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <div className="commute-time-header-container">
          <div className="commute-time-header">Estimated Commute Time</div>
        </div>
        <div className="commute-container">
          <Commute commuteTime={this.state.commuteTime} />
        </div>
      </div>
    );
  }
}

export default Calculator;
