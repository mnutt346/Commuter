import React from "react";

const MyCommutes = props => (
  <div className="my-commutes-container">
    <form className="my-commutes-form">
      <div className="my-commutes-form-header-container">
        <p className="my-commutes-form-header">My Commutes</p>
      </div>
      <div className="buttons-container">
        <div className="button-container">
          <button name="homeCommute" onClick={props.handleHomeClick}>
            To Home
          </button>
        </div>
        <div className="button-container">
          <button name="workCommute" onClick={props.handleWorkClick}>
            To Work
          </button>
        </div>
      </div>
      Home:{" "}
      <input
        type="text"
        name="home"
        onChange={props.handleChange}
        value={props.home}
      />
      <input type="time" name="homeCommuteTime" onChange={props.handleChange} />
      Work:{" "}
      <input
        type="text"
        name="work"
        onChange={props.handleChange}
        value={props.work}
      />
      <input type="time" name="workCommuteTime" onChange={props.handleChange} />
      <div className="button-container">
        <button name="submitButton" onClick={props.handleSetCommutes}>
          Set My Commutes
        </button>
      </div>
    </form>
  </div>
);

export default MyCommutes;
