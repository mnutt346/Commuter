import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./componenets/header.jsx";
import Calculator from "./componenets/calculator/calculator.jsx";
import SignUp from "./componenets/signup/signup.jsx";
import LogIn from "./componenets/login/login.jsx";
import "../styles/app.css";

class App extends React.Component {
  state = {
    origin: "",
    destination: "",
    departureDate: "",
    departureTime: 0,
    trafficModel: "best_guess",
    commuteTime: null,
    email: "",
    password: "",
    home: "",
    work: "",
    homeCommuteTime: "",
    workCommuteTime: ""
  };

  isAuthenticated = document.cookie.includes("session");

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.deleteCookies();
    });
    if (this.isAuthenticated) {
      Axios.get("/userInfo").then(response => {
        let { home, work, homeCommuteTime, workCommuteTime } = response.data;
        return this.setState({
          home: home,
          work: work,
          homeCommuteTime: homeCommuteTime,
          workCommuteTime: workCommuteTime
        });
      });
    }
  }

  deleteCookies = () => {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let {
      origin,
      destination,
      departureDate,
      departureTime,
      trafficModel
    } = this.state;

    Axios.post("/commute", {
      destination: destination,
      origin: origin,
      departureDate: departureDate,
      departureTime: departureTime,
      trafficModel: trafficModel
    }).then(response => this.setState({ commuteTime: response.data }));
  };

  handleLogin = e => {
    let { email, password } = this.state;
    Axios.post("/LogIn", {
      email: email,
      password: password
    }).catch(err => err);
  };

  handleSetCommutes = e => {
    e.preventDefault();
    let { home, work, homeCommuteTime, workCommuteTime } = this.state;
    Axios.post("/MyCommutes", {
      home: home,
      work: work,
      homeCommuteTime: homeCommuteTime,
      workCommuteTime: workCommuteTime
    }).catch(err => err);
  };

  handleHomeClick = e => {
    e.preventDefault();
    let { home, work, homeCommuteTime } = this.state;
    Axios.post("/commuteHome", {
      home: home,
      work: work,
      homeCommuteTime: homeCommuteTime,
      trafficModel: "best_guess"
    }).then(response => {
      console.log(response);
      this.setState({ commuteTime: response.data });
    });
  };

  handleWorkClick = e => {
    e.preventDefault();
    let { home, work, workCommuteTime } = this.state;
    Axios.post("/commuteWork", {
      home: home,
      work: work,
      workCommuteTime: workCommuteTime,
      trafficModel: "best_guess"
    }).then(response => {
      console.log(response);
      this.setState({ commuteTime: response.data });
    });
  };

  handleLogout = e => {
    location.reload();
  };

  render() {
    return (
      <div className="app-container">
        <div className="background">
          <HashRouter>
            <div className="router-container">
              <Header
                isAuthenticated={this.isAuthenticated}
                handleLogout={this.handleLogout}
              />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Calculator
                      isAuthenticated={this.isAuthenticated}
                      handleChange={this.handleChange}
                      handleInput={this.handleInput}
                      handleSubmit={this.handleSubmit}
                      commuteTime={this.state.commuteTime}
                      home={this.state.home}
                      work={this.state.work}
                      homeCommuteTime={this.state.homeCommuteTime}
                      workCommuteTime={this.state.workCommuteTime}
                      handleHomeClick={this.handleHomeClick}
                      handleWorkClick={this.handleWorkClick}
                      handleSetCommutes={this.handleSetCommutes}
                    />
                  )}
                />
                <Route path="/SignUp" component={SignUp} />
                <Route
                  path="/LogIn"
                  render={() => (
                    <LogIn
                      handleChange={this.handleChange}
                      handleLogin={this.handleLogin}
                    />
                  )}
                />
              </Switch>
            </div>
          </HashRouter>
          <div className="base-buffer" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
