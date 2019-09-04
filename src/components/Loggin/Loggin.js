import React, { Component } from "react";
import logo from "../Loggin/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class Loggin extends Component {
  render() {
    return (
      <div className="bg-backgroud">
        <div className="container">
          <div className="card animated bounceIn">
            <div className="card-body">
              <img src={logo} className="logo"></img>
              <h3 className="text-center">Iniciar sesión</h3>
              <input
                placeholder="Usuario"
                type="ingrese usuario"
                id="userAddNew"
                className="mb-1"
              ></input>
              <input
                placeholder="Contraseña"
                type="password"
                id="passAddUser"
                className="mb-1"
              ></input>
              <Link to="/home" style={buttons_styles}>
                <button className=" btn btn-primary mb-1 d-block w-100">
                  Entrar
                </button>
              </Link>
              <Link to="/registro" style={buttons_styles}>
                <button className=" btn btn-success d-block w-100">
                  ¿Eres nuevo?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const buttons_styles = {
  "text-decoration": "none"
};
