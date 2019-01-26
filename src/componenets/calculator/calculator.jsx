import React from "react";
import Form from "./form.jsx";
import axios from "axios";

class Calculator extends React.Component {
  state = {
    origin: "",
    desintation: "",
    departureDate: "",
    departureTime: 0
  };

  handleOriginInput = e => {
    this.setState({
      origin: e.target.value
    });
  };

  handleDestinationInput = e => {
    this.setState({
      desintation: e.target.value
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
    axios.post("http://localhost:3001/commute", {
      origin: origin,
      destination: destination,
      departureDate: departure_date,
      departureTime: departure_time
    });
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
      </div>
    );
  }
}

export default Calculator;
