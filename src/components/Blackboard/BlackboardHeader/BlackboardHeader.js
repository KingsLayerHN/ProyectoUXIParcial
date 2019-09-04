import React, { Component } from "react";

export default class BlackboardHeader extends Component {
  render() {
    return (
      <div className="container header-blackboard col-9 bg-primary">
        <h1 className="nameClass pt-3">Nombre de la clase</h1>
        <p className="codClass m-0">Seccion</p>
        <p className="codClass m-0">Código de la clase:</p>
        <a className="change-background" href="#">Cambiar fondo</a>
      </div>
    );
  }
}
