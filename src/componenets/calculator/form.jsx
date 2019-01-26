import React from "react";

const Form = props => (
  <form action="http://localhost:3001/commute" method="post">
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
      <button type="submit" name="submitButton">
        How fucked am I?
      </button>
    </div>
  </form>
);

export default Form;
