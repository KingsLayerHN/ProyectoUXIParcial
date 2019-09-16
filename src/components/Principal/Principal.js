import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOutButton from "../SignOut/SignOut";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import * as ROUTES from "../../constants/routes";
import Blackboard from "../Blackboard/Blackboard";

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
          if (this.props.firebase.auth.currentUser != null) {
            if (doc.data().user === this.props.firebase.auth.currentUser.uid) {
              this.setState({
                Clases: [...this.state.Clases, doc]
              });
            }
          }
        });
      });
  };

  removeNote = index => {
    if (window.confirm("Are you sure to delete it?")) {
      this.props.firebase.db
        .collection("Classes")
        .doc(this.state.Clases[index].id)
        .delete()
        .then(function() {
          console.log("delete class success!!!");
        })
        .catch(function(error) {
          console.error("Error remove document: ", error);
        });

      this.setState({
        Clases: this.state.Clases.filter((e, i) => {
          return i !== index;
        })
      });
    }
  };

  addToState = doc => {
    this.props.firebase.db
      .collection("Classes")
      .doc(doc)
      .get()
      .then(querySnapshot => {
        this.setState({
          Clases: [...this.state.Clases, querySnapshot]
        });
      })
      .catch(error => {
        console.error("Error remove document: ", error);
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
        this.addToState(idRef.id);
        document.getElementById("nameClass").value = "";
        document.getElementById("sectionName").value = "";
        document.getElementById("roomClass").value = "";
        $("#mostrar_crear").modal("hide");
      })
      .catch(error => {
        console.error("Error add document: ", error);
      });
    event.preventDefault();
  };

  // ---------------------------------------RENDER -------------------------
  render() {
    // create blackboard on other page
    const sendState = () => {
      return <div></div>;
    };
    //add class on home
    const addClass = this.state.Clases.map((actualClass, i) => {
      return (
        <div
          className="card card-task text-center mb-4 animated bounceIn"
          key={i}
        >
          <button
            className="badge badge-danger"
            onClick={this.removeNote.bind(this, i)}
          >
            x
          </button>
          <Link to={ROUTES.BLACKBOARD} className="linkToBlackboard">
            <div className="card-header renderClass"></div>
            <div className="card-body p-1">
              <h5 className="card-title">{actualClass.data().nameClass}</h5>
              <p className="card-text">{actualClass.data().sectionName}</p>
              <p className="card-text">{actualClass.data().roomClass}</p>
            </div>
          </Link>
          <div className=" card-footer p-0 font-weight-normal small">
            Codigo Clase <br />
            <h6 className="small font-weight-bold text-danger">
              {actualClass.id}
            </h6>
          </div>
        </div>
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
                      onClick={this.onClickcleanStatus}
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
          {addClass}
        </div>
      </div>
    );
  }
}

const Home = withRouter(withFirebase(Principal));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(homePage);
export { Principal };
