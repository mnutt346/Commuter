import React from "react";
import Form from "./form.jsx";
import axios from "axios";

class Calculator extends React.Component {
  state = {
    origin: "",
    desintation: "",
    departure_date: "",
    departure_time: 0
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
      departure_time: e.target.value
    });
  };

  handleDateInput = e => {
    this.setState({
      departure_date: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { origin, destination, departure_date, departure_time } = this.state;
    axios.post("http://localhost:3001/commute", {
      data: {
        origin: origin,
        destination: destination,
        departure_date: departure_date,
        departure_time: departure_time
      }
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
