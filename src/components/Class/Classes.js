import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import { withAuthorization } from "../Sesion";
import * as ROUTES from "../../constants/routes";
import cardImg from "./Clase.jpg";

const NewClassDetails = () => (
  <div>
    <NewClass />
  </div>
);

const buttons_styles = {
  textDecoration: "none",
  background: "none",
  color: "black"
};

const INITIAL_STATE = {
  classCode: "",
  nameClass: "", //email also its the username
  sectionName: "",
  roomClass: ""
};

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //add task

  render() {
    return (
      <Link to={ROUTES.BLACKBOARD} style={buttons_styles}>
        <div className="card card-task text-center">
          <img
            className="card-header p-0 text-center logo-task d-flex"
            src={cardImg}
          ></img>
          <div className="card-body p-1">
            <h5 className="card-title">dale</h5>
            <p className="card-text">Sección única</p>
            <p className="card-text">Sección única</p>
            <p className="card-footer p-0 bg-0">Codigo:</p>
          </div>
        </div>
      </Link>
    );
  }
}

const NewClass = withRouter(withFirebase(Classes));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(NewClassDetails);
export { Classes };
