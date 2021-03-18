import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Users from "./pages/Users";
import Workouts from "./pages/Workouts";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGithub, faLinkedin, fas, faPaperPlane);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/workouts" component={Workouts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
