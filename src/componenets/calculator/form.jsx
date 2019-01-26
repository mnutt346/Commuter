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
        name="departure-time"
        onChange={props.handleTimeInput}
      />
      <input
        type="date"
        name="departure-date"
        onChange={props.handleDateInput}
      />
    </div>
  </form>
);

export default Form;
