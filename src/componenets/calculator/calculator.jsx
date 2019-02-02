import React from "react";
import Form from "./form.jsx";
import Commute from "./commute.jsx";
import MyCommutes from "../memberCalc/myCommutes.jsx";

const Calculator = props => {
  let { isAuthenticated } = props;
  return isAuthenticated ? (
    <>
      <div className="member-calc-container">
        <MyCommutes
          handleChange={props.handleChange}
          home={props.home}
          homeCommuteTime={props.homeCommuteTime}
          workCommuteTime={props.workCommuteTime}
          work={props.work}
          handleHomeClick={props.handleHomeClick}
          handleWorkClick={props.handleWorkClick}
          handleSetCommutes={props.handleSetCommutes}
        />
        <div className="calculator-container">
          <Form
            handleInput={props.handleInput}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
          <div className="commute-time-header-container">
            <div className="commute-time-header">Estimated Commute Time</div>
          </div>
          <div className="commute-container">
            <Commute commuteTime={props.commuteTime} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="calculator-container">
      <Form
        handleInput={props.handleInput}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <div className="commute-time-header-container">
        <div className="commute-time-header">Estimated Commute Time</div>
      </div>
      <div className="commute-container">
        <Commute commuteTime={props.commuteTime} />
      </div>
    </div>
  );
};

export default Calculator;
