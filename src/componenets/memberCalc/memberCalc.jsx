import React from "react";
import Calculator from "../calculator/calculator.jsx";
import MyCommutes from "./myCommutes.jsx";
import Axios from "axios";

export default class MemberCalc extends React.Component {
  state = { home: "", work: "" };

  render() {
    return (
      <div className="member-calc-container">
        <MyCommutes />
        <Calculator />
      </div>
    );
  }
}
