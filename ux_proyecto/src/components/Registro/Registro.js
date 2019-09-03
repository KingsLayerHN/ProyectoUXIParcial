import React, { Component } from "react";
import logo from '../Loggin/Logo.svg';

export default class Registro extends Component {
  render() {
      return <div className="wrapper">
        <div className="form-wrapper">
          <img src={logo} className="logo" alt="Logo"></img>
          <h1>Crear Cuenta</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="nombre">
             <label htmlFor="nombre">Nombre</label>
             <input 
              type="text" 
              className="" 
              placeholder="Nombre"  
              name="nombre"
              noValidate 
              onChange={this.handleChange}
             /> 
            </div>
            <div className="apellido">
             <label htmlFor="apellido">Apellido</label>
             <input 
              type="text" 
              className="" 
              placeholder="Apellido"  
              name="apellido"
              noValidate 
              onChange={this.handleChange}
             /> 
            </div>
            <div className="correo">
             <label htmlFor="correo">Correo</label>
             <input  
              className="" 
              placeholder="Correo"
              type="email"  
              name="correo"
              noValidate 
              onChange={this.handleChange}
             /> 
            </div>
            <div className="contraseña">
             <label htmlFor="contraseña">Contraseña</label>
             <input  
              className="" 
              placeholder="Contraseña"
              type="password" 
              name="contraseña"
              noValidate 
              onChange={this.handleChange}
             /> 
            </div>
            <div className="crearCuenta">
              <button type="submit">Crear Cuenta</button>
              <small>Ya tienes una cuenta?</small>
            </div>
          </form>
        </div>
      </div>
  }
}
