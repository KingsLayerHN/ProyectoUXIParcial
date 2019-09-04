import React, { Component } from "react";
import img1 from '../../images/Clase1.jpg';
import "./Card.css";
const Card= props =>{
    return(
        <div id="mycard" className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Clase" className="card-img-top"></img>
            </div>
            <div id="mycard-body" className="card-body text-dark">
                <h4 id="mycard-title" className="card-title">{props.title}</h4>
                <p id="mycard-text" className="card-text text-secondary">Seccion</p>
                <button type="button" class="btn btn-primary">Ingresar</button>
            </div>
        </div>
    );
}

export default Card;