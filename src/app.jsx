import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componenets/header.jsx";
import Calculator from "./componenets/calculator/calculator.jsx";
import SignUp from "./componenets/signup/signup.jsx";
import LogIn from "./componenets/login/login.jsx";
import "../styles/app.css";

const App = () => (
  <div className="app-container">
    <div className="background">
      <Router>
        <div className="router-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Calculator} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/LogIn" component={LogIn} />
          </Switch>
        </div>
      </Router>
      <div className="base-buffer" />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
