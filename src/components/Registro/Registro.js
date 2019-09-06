import React, { Component } from "react";
import logo from "../Loggin/Logo.svg";
import { Link } from "react-router-dom";

//initial state for the component registro
const INITIAL_STATE = {
  email: "", //email also its the username
  name: "",
  midleName: "",
  password: "",
  repeatPassword: "",
  error: null
};

export default class Registro extends Component {
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
    const { email, name, midleName, password, repeatPassword } = this.state;
    const isInvalid =
      password !== repeatPassword ||
      password === "" ||
      name === "" ||
      midleName === "";

    return (
      <div className="wrapper bg-backgroud">
        <div className="form-wrapper animated bounceInDown">
          <img src={logo} className="logo" alt="Logo"></img>
          <h1>Crear Cuenta</h1>
          <form onSubmit={this.onSubmit} noValidate>
            <div className="nombre">
              <label htmlFor="nombre">Nombre</label>
              <input
                name="name"
                type="text"
                value={name}
                noValidate
                onChange={this.onChange}
                placeholder="Nombre"
              />
            </div>
            <div className="apellido">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                name="midlename"
                value={midleName}
                noValidate
                onChange={this.onChange}
              />
            </div>
            <div className="correo">
              <label htmlFor="correo">Correo</label>
              <input
                placeholder="Correo"
                type="email"
                name="email"
                value={email}
                noValidate
                onChange={this.onChange}
              />
            </div>
            <div className="contraseña">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                className=""
                placeholder="Contraseña"
                type="password"
                name="password"
                value={password}
                noValidate
                onChange={this.onChange}
              />
            </div>
            <div className="contraseña">
              <label htmlFor="contraseña">Repetir Contraseña</label>
              <input
                className=""
                placeholder="Repetir contraseña"
                type="password"
                name="repeatPassword"
                value={repeatPassword}
                noValidate
                onChange={this.onChange}
              />
            </div>
            <div className="crearCuenta">
              <button type="submit">Crear Cuenta</button>
              <Link to="/" style={buttons_styles}>
                Ya tienes una cuenta?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const buttons_styles = {
  color: "rgb(136, 135, 125)"
};
