import React from "react";
import Form from "./form.jsx";
import Commute from "./commute.jsx";
import axios from "axios";

class Calculator extends React.Component {
  state = {
    origin: "",
    destination: "",
    departureDate: "",
    departureTime: 0,
    commuteTime: null
  };

  handleOriginInput = e => {
    this.setState({
      origin: e.target.value
    });
  };

  handleDestinationInput = e => {
    this.setState({
      destination: e.target.value
    });
  };

  handleTimeInput = e => {
    this.setState({
      departureTime: e.target.value
    });
  };

  handleDateInput = e => {
    this.setState({
      departureDate: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { origin, destination, departureDate, departureTime } = this.state;
    axios
      .post("/commute", {
        destination: destination,
        origin: origin,
        departureDate: departureDate,
        departureTime: departureTime
      })
      .then(response => this.setState({ commuteTime: response.data }));
  };

  render() {
    return (
      <div className="calculator-container">
        <Form
          handleOriginInput={this.handleOriginInput}
          handleDestinationInput={this.handleDestinationInput}
          handleTimeInput={this.handleTimeInput}
          handleDateInput={this.handleDateInput}
          handleSubmit={this.handleSubmit}
        />
        <div className="commute-container">
          <Commute commuteTime={this.state.commuteTime} />
        </div>
      </div>
    );
  }
}

export default Calculator;
