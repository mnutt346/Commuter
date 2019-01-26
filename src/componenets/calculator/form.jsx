import React from "react";

const Form = props => (
  <form>
    <div className="origin-destination-container">
      Origin:{" "}
      <input type="text" name="origin" onChange={props.handleOriginInput} />
      Destination:{" "}
      <input
        type="text"
        name="destination"
        onChange={props.handleDestinationInput}
      />
    </div>
    <div className="date-time-container">
      Departure time & date:{" "}
      <input
        type="time"
        name="departureTime"
        onChange={props.handleTimeInput}
      />
      <input
        type="date"
        name="departureDate"
        onChange={props.handleDateInput}
      />
    </div>
    <div className="button-container">
      <button name="submitButton" onClick={props.handleSubmit}>
        How fucked am I?
      </button>
    </div>
  </form>
);

export default Form;
