import React, { Component } from "react";
import Loggin from "./components/Loggin/Loggin";
import Registro from "./components/Registro/Registro";
import Principal from "./components/Principal/Principal";
import Blackboard from "./components/Blackboard/Blackboard";
import Card from "./components/Card/Cards"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Loggin} />
          <Route path="/home" component={Principal} />
          <Route path="/registro" component={Registro} />
          <Route path="/blackboard" component={Blackboard} />
          <Route path="/card" component={Card} />
        </Switch>
      </Router>
    );
  }
}

export default App;
