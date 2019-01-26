import React from "react";
import ReactDOM from "react-dom";
import Header from "./componenets/header.jsx";
import Calculator from "./componenets/calculator/calculator.jsx";
import "../styles/app.css";

const App = () => (
  <div className="app-container">
    <div className="background">
      <Header />
      <Calculator />
      <div className="base-buffer" />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
