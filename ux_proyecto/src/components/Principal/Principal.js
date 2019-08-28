import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import add from "./add.svg";

export default class Principal extends Component {
  render() {
    return (
      <nav className=" navbar  navbar-expand-lg navbar-light bg-light page-header">
        <div className="btn-group dropright">
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button"></button>
          </div>
        </div>
        <div id="boton_sesion" className="dropdown dropleft ml-auto mr-3">
          <button
            className="dropdown-toogle icons"
            href="#"
            id="dropdownMenu2"
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              Apuntarse en una clase
            </button>
            <button className="dropdown-item" type="button">
              Crear una clase
            </button>
          </div>
        </div>

        <div id="boton_mas" className="btn-group dropleft mr-3">
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
      </nav>
    );
  }
}
