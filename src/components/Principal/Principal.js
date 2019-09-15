import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOutButton from "../SignOut/SignOut";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import cardImg from "./Clase.jpg";
import * as ROUTES from "../../constants/routes";

const homePage = () => (
  <div>
    <Home />
  </div>
);

const buttons_styles = {
  textDecoration: "none",
  background: "none",
  color: "black"
};

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Clases: []
    };
    this.uploadClases();
  }

  uploadClases = () => {
    this.props.firebase.db
      .collection("Classes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().user === this.props.firebase.auth.currentUser.uid) {
            this.setState({
              Clases: [...this.state.Clases, doc.data()]
            });
          }
        });
      });
  };

  onSubmit = event => {
    //console.log("no esta pasando aqui", this.props.firebase.actualUser.uid);
    let nameClass = document.getElementById("nameClass").value;
    let sectionName = document.getElementById("sectionName").value;
    let roomClass = document.getElementById("roomClass").value;
    let user = "";
    if (this.props.firebase.auth.currentUser != null) {
      user = this.props.firebase.auth.currentUser.uid;
    }
    this.props.firebase.db
      .collection("Classes")
      .add({
        user,
        nameClass,
        sectionName,
        roomClass
      })
      .then(idRef => {
        this.setState({
          Clases: [
            ...this.state.Clases,
            {
              user,
              nameClass,
              sectionName,
              roomClass
            }
          ]
        });
        document.getElementById("nameClass").value = "";
        document.getElementById("sectionName").value = "";
        document.getElementById("roomClass").value = "";
        $("#mostrar_crear").modal("hide");
      })
      .catch(() => {
        alert("No se ha podido guardar");
      });
    event.preventDefault();
  };

  render() {
    //add class on home
    const addNotes = this.state.Clases.map((actualClass, i) => {
      return (
        <Link to={ROUTES.BLACKBOARD} style={buttons_styles} key={i}>
          <div className="card card-task text-center mb-4">
            <img
              className="card-header p-0 text-center logo-task d-flex"
              src={cardImg}
            ></img>
            <div className="card-body p-1">
              <h5 className="card-title">{actualClass.nameClass}</h5>
              <p className="card-text">{actualClass.sectionName}</p>
              <p className="card-text">{actualClass.roomClass}</p>
              <p className="card-footer p-0 bg-0">Codigo:</p>
            </div>
          </div>
        </Link>
      );
    });

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
                  <form onSubmit={this.onSubmit} className="d-flex flex-column">
                    <div className="form-group form-check">
                      <input
                        placeholder="Nombre clase"
                        type="text"
                        name="nameClass"
                        id="nameClass"
                        className="form-control input-css"
                        required
                      ></input>
                    </div>
                    <div className="form-group form-check">
                      <input
                        placeholder="Seccion"
                        type="text"
                        name="sectionName"
                        id="sectionName"
                        className="form-control  input-css"
                        required
                      ></input>
                    </div>
                    <div className="form-group form-check">
                      <input
                        placeholder="Aula"
                        type="text"
                        name="roomClass"
                        id="roomClass"
                        className="form-control  input-css "
                        required
                      ></input>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success mb-1"
                      id="modalSubmit"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/*-----------------------------all task code show here!!!!-------------------------*/}

        <div className="container-fluid d-flex flex-wrap mt-4 tex-center">
          {addNotes}
        </div>
      </div>
    );
  }
}

const Home = withRouter(withFirebase(Principal));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(homePage);
export { Principal };
