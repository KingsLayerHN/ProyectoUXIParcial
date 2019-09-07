import React, { Component } from "react";
import logo from "../Loggin/Logo.svg";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { Alert } from "react-bootstrap";
//initial state for the component registro

const SignUpPage = () => (
  <div>
    <SignUp />
  </div>
);

const INITIAL_STATE = {
  email: "", //email also its the username
  name: "",
  midleName: "",
  password: "",
  repeatPassword: "",
  error: null
};

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //add user
  onSubmit = event => {
    const { email, name, midleName, password, repeatPassword } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.SIGN_IN);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
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
              <label htmlFor="nombre">Apellido</label>
              <input
                name="midleName"
                type="text"
                value={midleName}
                noValidate
                onChange={this.onChange}
                placeholder="Apellido"
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
              <button type="submit" disabled={isInvalid}>
                Crear Cuenta
              </button>
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
const SignUp = withRouter(withFirebase(Registro));
export default SignUpPage;
export { Registro };
