import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Nav from "./components/Nav/Nav";
import Users from "./pages/Users";
import Workoutform from "./components/Workoutform/Workoutform";
import Workouts from "./pages/Workouts";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/Workoutform" component={Workoutform} />
          <Route exact path="/workout" component={Workouts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
