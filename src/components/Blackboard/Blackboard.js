import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOutButton from "../SignOut/SignOut";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import * as ROUTES from "../../constants/routes";

const BlackboardPage = () => (
  <div>
    <BlackboardHome />
  </div>
);

const buttons_styles = {
  textDecoration: "none",
  background: "none",
  color: "black"
};

class Blackboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // ------------------------ add props -------------------------

    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-white p-0 pr-3">
          <ul className="navbar-nav navOption">
            <li className="nav-item py-3 px-2">
              <a className="nav-link" href="#">
                Blackboard:
              </a>
            </li>
            <li className="nav-item py-3 px-2">
              <a
                className="nav-link"
                href="#crear_tarea"
                data-toggle="modal"
                data-target="#crear_tarea"
              >
                Tasks
              </a>
            </li>
            <li className="nav-item py-3 px-2">
              <a className="nav-link" href="#">
                Score
              </a>
            </li>
          </ul>
          <div className="btn-group dropright">
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button"></button>
            </div>
          </div>
          <div id="plusButton" className="dropdown dropleft ml-auto">
            <button
              className="dropdown-toogle icons"
              href="#"
              id="dropdownMenu2"
              data-toggle="dropdown"
            >
              <FontAwesomeIcon icon={["far", "user"]} />
            </button>
            <div className="dropdown-menu text-center ">
              <SignOutButton style={buttons_styles} />
            </div>
          </div>
        </nav>

        <div className="modal fade" id="crear_tarea">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-info">Tarea</h5>
              </div>

              <div className="modal-body">
                <input
                  placeholder="Título"
                  className="form-control input-style"
                  required
                ></input>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Instrucciones (opcional)"
                ></textarea>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <p>Puntos</p>
                    <input
                      className="form-control form-control-sm"
                      placeholder="Puntos"
                    ></input>
                  </div>
                  <div className="col">
                    <p>Fecha de entrega:</p>
                    <div className="input-group date">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                      ></input>
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-th"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn">
                  Crear tarea
                </button>
                <button type="button" className="btn" data-dismiss="modal">
                  Cancelar tarea
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const BlackboardHome = withRouter(withFirebase(Blackboard));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(BlackboardPage);
export { Blackboard };
