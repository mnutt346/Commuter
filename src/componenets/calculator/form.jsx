import React from "react";

const Form = props => (
  <form>
    <div className="origin-destination-container">
      Origin: <input type="text" name="origin" onChange={props.handleInput} />
      Destination:{" "}
      <input type="text" name="destination" onChange={props.handleInput} />
    </div>
    <div className="date-time-container">
      Departure time & date:{" "}
      <input type="time" name="departureTime" onChange={props.handleInput} />
      <input type="date" name="departureDate" onChange={props.handleInput} />
    </div>
    <div className="traffic-model-container">
      <input
        type="radio"
        name="trafficModel"
        value="best_guess"
        onChange={props.handleChange}
      />
      <label htmlFor="best_guess">Best Guess</label>
      <input
        type="radio"
        name="trafficModel"
        value="optimistic"
        onChange={props.handleChange}
      />
      <label htmlFor="optimistic">Optimistic</label>
      <input
        type="radio"
        name="trafficModel"
        value="pessimistic"
        onChange={props.handleChange}
      />
      <label htmlFor="pesimistic">Pesimistic</label>
    </div>
    <div className="button-container">
      <button name="submitButton" onClick={props.handleSubmit}>
        How bad is it?
      </button>
    </div>
  </form>
);

export default Form;
