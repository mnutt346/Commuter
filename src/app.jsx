import React from "react";
import ReactDOM from "react-dom";
import "../styles/app.css";

const App = () => (
  <div className="app-container">
    <div className="background">
      <div className="header-container">
        <div className="header">COMMUTER</div>
      </div>
      <div className="calculator-container">
        <div className="calculator">HELLO</div>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
