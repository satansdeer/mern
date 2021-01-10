import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Secret } from "./Secret";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
        </Switch>
      </div>
    );
  }
}

export default App;
