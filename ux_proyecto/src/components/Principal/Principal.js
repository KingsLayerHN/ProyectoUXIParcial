import React, { Component } from "react";
import logo from '../Loggin/Logo.svg';
import './Principal.css'

export default class Home_principal extends Component {
 render(){
     return(
        <div>
            <navbar>    
                <div className="btn-group dropright">
                        <button type="button" className="btn btn-outline-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://image.flaticon.com/icons/png/512/15/15676.png" width="20" height="30"></img>
                        </button>
                        <div className="dropdown-menu">
                            <button class="dropdown-item" type="button">Clases</button>
                        </div>
                </div>
                <img src={logo} className="logo" width="80" height="80"></img>
                Aprende!
                <div id="boton_mas" className="btn-group dropleft">
                    <button type="button" className="btn btn-outline-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://image.flaticon.com/icons/png/512/36/36962.png" width="30" height="30"></img>
                    </button>
                    <div className="dropdown-menu">
                        <button class="dropdown-item" type="button">Apuntarse en una clase</button>
                        <button class="dropdown-item" type="button">Crear una clase</button>
                    </div>
                </div>
            </navbar>
            <div className="bg-backgroud">
            </div>
        </div>
        );
    }
}