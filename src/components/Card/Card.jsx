import React, { Component } from "react";
import img1 from '../../images/Clase1.jpg';
import "./Card.css";

const Card= props =>{
    return(
        <div id="mycard" className="card text-center">
            <div className="overflow">
                <img src={img1} alt="Clase" className="card-img-top"></img>
            </div>
            <div id="mycard-body" className="card-body text-dark">
                <h4 id="mycard-title" className="card-title">{props.title}</h4>
                <h5 id="mycard-text" className="card-text text-secondary">Seccion</h5>
                <h5 id="mycard-text" className="card-text text-secondary">Materia</h5>
                <h5 id="mycard-text" className="card-text text-secondary">Aula</h5>
                <button type="button" className="btn btn-primary">Ingresar</button>
            </div>
        </div>
    );
}

export default Card;