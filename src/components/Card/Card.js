import React, { Component } from "react";
import img1 from "../../images/Clase1.jpg";
import "./Card.css";
import { Link, withRoutes } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Card = props => {
  return (
    <Link to={ROUTES.BLACKBOARD}>
      <div id="mycard" className="card text-center">
        <div className="overflow">
          <img src={img1} alt="Clase" className="card-img-top"></img>
        </div>
        <div id="mycard-body" className="card-body text-dark">
          <h4 id="mycard-title" className="card-title">
            Nombre
          </h4>
          <h5 id="mycard-text" className="card-text text-secondary">
            Seccion
          </h5>
          <h5 id="mycard-text" className="card-text text-secondary">
            Aula
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
