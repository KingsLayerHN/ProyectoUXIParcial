import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOutButton from "../SignOut/SignOut";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import NewTaskDetails from "../Tasks/Task";

const homePage = () => (
  <div>
    <Home />
  </div>
);

const buttons_styles = {
  textDecoration: "none",
  background: "none"
};

const INITIAL_STATE = {
  classCode: "",
  className: "susana", //email also its the username
  sectionName: "",
  roomClass: ""
};

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classCode, nameClass, sectionName, roomClass } = this.state;

    const isInvalid =
      classCode === "" ||
      nameClass === "" ||
      sectionName === "" ||
      roomClass === "";

    return (
      <div className="div.container-fluid.d-flex justify-content-center">
        <nav className=" navbar  navbar-expand-lg navbar-light bg-white page-header ">
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
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </button>
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                type="button"
                data-toggle="modal"
                data-target="#mostrar_apuntarse"
              >
                Apuntarse en una clase
              </button>
              <button
                className="dropdown-item"
                type="button"
                data-toggle="modal"
                data-target="#mostrar_crear"
              >
                Crear una clase
              </button>
            </div>
          </div>

          <div id="userButton" className=" dropdown btn-group dropleft mr-3">
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

          <div className="modal fade" id="mostrar_apuntarse">
            <div className="modal-dialog">
              <div className="modal-content">
                <h4 className="modal-header text-center">
                  Apuntarse a una clase
                </h4>
                <div className="modal-body">
                  <h6>
                    Pídele el código de la clase a tu profesor e introdúcelo
                    aquí.
                  </h6>
                </div>
                <div className="modal-body">
                  <input
                    placeholder="Ingresa Código clase"
                    className="form-control input-style"
                    required
                  ></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success">
                    Unirse
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="mostrar_crear">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h1 className="text-info lead text-center">
                    Crear una clase
                  </h1>
                </div>

                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group form-check">
                      <input
                        placeholder="Nombre clase"
                        value={nameClass}
                        name="nameClass"
                        className="form-control input-css"
                        required
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group form-check">
                      <input
                        placeholder="Seccion"
                        value={sectionName}
                        name="sectionName"
                        className="form-control  input-css"
                        required
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group form-check">
                      <input
                        placeholder="Aula"
                        value={roomClass}
                        name="roomClass"
                        className="form-control  input-css"
                        required
                        onChange={this.onChange}
                      ></input>
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Crear
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*-----------------------------all task code show here!!!!-------------------------*/}

        <div className="container-fluid d-flex flex-wrap mt-4 tex-center">
          <NewTaskDetails nameClass={this.state.nameClass}/>
          <NewTaskDetails />
        </div>
      </div>
    );
  }
}

const Home = withRouter(withFirebase(Principal));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(homePage);
export { Principal };
