import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";
import SignOutButton from "../SignOut/SignOut";
import { withAuthorization } from "../Sesion";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

const homePage = () => (
  <div>
    <Home />
  </div>
);

const buttons_styles = {
  textDecoration: "none",
  background: "none"
};

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreClase: "",
      materiaClase: "",
      seccionClase: "",
      aulaClase: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
  };
  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    console.log("Name: ", event.target.name);
    console.log("Value: ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { nombreClase } = this.state;
    const { seccionClase } = this.state;
    const { aulaClase } = this.state;
    function addCard() {
      alert("Agregar Tarjetas con props");
      this.inputEntry.value = "";
    }
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
                <div className="modal-header">
                  <h4 className="modal-title">Apuntarse a una clase</h4>
                </div>
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
                  <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Nombre de la clase (obligatorio)"
                          value={nombreClase}
                          name="nombreClase"
                          className="form-control"
                          required
                          onChange={this.handleInputChange}
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">
                          Por favor introduce el nombre de la clase
                        </div>
                      </label>
                    </div>
                  </form>
                  <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Sección"
                          className="form-control"
                          required
                          name="seccionClase"
                          value={seccionClase}
                          onChange={this.handleInputChange}
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">
                          Por favor introduce la sección
                        </div>
                      </label>
                    </div>
                  </form>
                  <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Aula"
                          className="form-control"
                          required
                          name="aulaClase"
                          value={aulaClase}
                          onChange={this.handleInputChange}
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">
                          Por favor introduce el Aula
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    onClick={addCard}
                    type="button"
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
        <div id="cards_container">
          <Card />
          <div id="atributes_container">
            <p>Nombre: {nombreClase}</p>
            <p>Seccion: {seccionClase}</p>
            <p>Aula: {aulaClase}</p>
          </div>
        </div>
      </div>
      //add all class component here!!
    );
  }
}

const Home = withRouter(withFirebase(Principal));
const condition = authUser => !!authUser;
export default withAuthorization(condition)(homePage);
export { Principal };
