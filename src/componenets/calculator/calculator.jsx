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

  render() {
    return (
      <div className="calculator-container">
        <Form
          handleOriginInput={this.handleOriginInput}
          handleDestinationInput={this.handleDestinationInput}
          handleTimeInput={this.handleTimeInput}
          handleDateInput={this.handleDateInput}
        />
      </div>
    );
  }
}

export default Calculator;
