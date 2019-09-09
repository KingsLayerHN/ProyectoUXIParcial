import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import add from "./add.svg";
import { Link } from "react-router-dom";
import Card from '../Card/Card';
import img from '../../images/Clase.jpg';


export default class Principal extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: null
      }
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const data = this.state
    console.log("Final Data is: ", data)
    alert(data)
  }
  handleInputChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const {name}=this.state
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
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button">
                Cerrar sesión
              </button>
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
                    Pídele el código de la clase a tu profesor e introdúcelo aquí.
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
                  <h1 className="text-info lead text-center">Crear una clase</h1>
                </div>

                <div className="modal-body p-0 pt-3">
                  <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          className="form-control"
                          required
                          type="text"
                          name= 'name'
                          onChange={this.handleInputChange}
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">Ingresa materia</div>
                      </label>
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Sección"
                          className="form-control"
                          required
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">Ingresa la sección</div>
                      </label>
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Materia"
                          className="form-control"
                          required
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">
                          Ingresa el nombre de la materia
                        </div>
                      </label>
                      <label className="form-check-label">
                        <div className="input-group-prepend"></div>
                        <input
                          placeholder="Aula"
                          className="form-control"
                          required
                        ></input>
                        <div className="valid-feedback">Entrada en proceso</div>
                        <div className="invalid-feedback">Ingresa el aula</div>
                      </label>
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-dismiss="modal">
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
      </div>
      </div>

      //add all class component here!!

    );
    
  }
}


