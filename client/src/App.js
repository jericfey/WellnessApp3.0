import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Nav from "./components/Nav/Nav";
import Dataform from "./components/Dataform/Dataform";
import Data from "./pages/Users";
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

          <Route exact path="/Dataform" component={Dataform} />
          <Route exact path="/Data" component={Data} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
