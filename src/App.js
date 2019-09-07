import React, { Component } from "react";
import Loggin from "./components/Loggin/Loggin";
import Registro from "./components/Registro/Registro";
import Principal from "./components/Principal/Principal";
import Blackboard from "./components/Blackboard/Blackboard";
import Card from "./components/Card/Cards"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={Loggin} />
          <Route path={ROUTES.HOME} component={Principal} />
          <Route path={ROUTES.SING_UP} component={Registro} />
          <Route path={ROUTES.BLACKBOARD} component={Blackboard} />
          <Route path="/card" component={Card} />
        </Switch>
      </Router>
    );
  }
}

export default App;
