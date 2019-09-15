import React, { Component } from "react";
import logo from "../Loggin/Logo.svg";
import { withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <SingIn />
  </div>
);

const INITIAL_STATE = {
  email: "", //email also its the username
  password: ""
};

class Loggin extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        alert("Usuario o contraseña incorrecta");
        this.setState({ ...INITIAL_STATE });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = email === "" || password === "";

    return (
      <div className="bg-backgroud">
        <div className="container">
          <div className="card animated bounceIn card-loggin">
            <form onSubmit={this.onSubmit} className="card-body">
              <img src={logo} className="logo"></img>
              <h3 className="text-center">Iniciar sesión</h3>
              <input
                placeholder="Usuario"
                type="email"
                name="email"
                value={email}
                className="mb-1 d-block w-100"
                onChange={this.onChange}
              ></input>
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
                className="mb-1 d-block w-100"
              ></input>
              <button
                className=" btn btn-primary mb-1 d-block w-100"
                type="submit"
                disabled={isInvalid}
              >
                Entrar
              </button>
              <Link to={ROUTES.SING_UP} style={buttons_styles}>
                <button className=" btn btn-success d-block w-100">
                  ¿Eres nuevo?
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const buttons_styles = {
  textDecoration: "none",
  width: "100%"
};

const SingIn = withRouter(withFirebase(Loggin));
export default SignInPage;
export { Loggin };
