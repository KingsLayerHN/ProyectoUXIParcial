import React, { Component } from "react";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

const BlackboardPage = () => (
  <div>
    <BlackoboardHome />
  </div>
);

class Blackboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hola Amiguitos</div>;
  }
}

const BlackoboardHome = withRouter(withFirebase(Blackboard));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(BlackboardPage);
export { Blackboard };
