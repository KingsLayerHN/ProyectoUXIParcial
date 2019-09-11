import React, { Component } from "react";
import BlackboardHeader from "./BlackboardHeader/BlackboardHeader";
import BlackboardNav from "./BlackboardNav/BlackboardNav";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

const blackboardPage = () => (
  <div>
    <Board />
  </div>
);

class Blackboard extends Component {
  render() {
    return (
      <div>
        <BlackboardNav />
        <BlackboardHeader />
      </div>
    );
  }
}

const Board = withRouter(withFirebase(Blackboard));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(blackboardPage);
export { Blackboard };
