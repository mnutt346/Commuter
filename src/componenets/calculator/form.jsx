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
        name="departure-time"
        onChange={props.handleTimeInput}
      />
      <input
        type="date"
        name="departure-date"
        onChange={props.handleDateInput}
      />
    </div>
    <div className="button-container">
      <button type="submit" name="submit-button">
        How fucked am I?
      </button>
    </div>
  </form>
);

export default Form;
