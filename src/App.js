import React, { Component } from "react";
import Loggin from "./components/Loggin/Loggin";
import Registro from "./components/Registro/Registro";
import Principal from "./components/Principal/Principal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { withFirebase } from "./components/Firebase";
import Blackboard from "./components/Blackboard/Blackboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={Loggin} />
          <Route path={ROUTES.HOME} component={Principal} />
          <Route path={ROUTES.SING_UP} component={Registro} />
          <Route path={ROUTES.BLACKBOARD} component={Blackboard} name = "hola a todos"/>
        </Switch>
      </Router>
    );
  }
}

export default withFirebase(App);
