import React, { Component } from "react";
import logo from '../Loggin/Logo.svg';


export default class Loggin extends Component {
  render() {
    return (
      <div className="bg-backgroud">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <img src={logo} className="logo"></img>
              <h3 className="text-center">Iniciar sesión</h3>
              <input placeholder="Usuario" type="ingrese usuario" id="userAddNew" className="mb-1"></input>
              <input placeholder="Contraseña" type="password" id="passAddUser" className="mb-1"></input>
              <button className=" btn btn-primary mb-1">Entrar</button>
              <button className=" btn btn-success">¿Eres nuevo?</button>  
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
