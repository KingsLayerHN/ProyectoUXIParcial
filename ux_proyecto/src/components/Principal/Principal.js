import React, { Component } from "react";
import logo from '../Loggin/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Principal.css'

export default class Home_principal extends Component {
 render(){
     return(
        <div>
            <navbar className="page-header">    
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
                <div id="boton_sesion" className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria- haspopup="true" aria-expanded="false">
                        <img src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1608/tuktukdesign160800055/61010890-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-ilustraci%C3%B3n-vectorial-persona-glifo.jpg" width="30" height="30"></img>
                    </button>
                    <FontAwesomeIcon icon={['far','id-badge']} />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Cerrar sesión</button>
                    </div>
                </div>
                <div id="boton_mas" className="btn-group dropleft">
                    <button type="button" className="btn btn-outline-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://image.flaticon.com/icons/png/512/36/36962.png" width="30" height="30"></img>
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">Apuntarse en una clase</button>
                        <button className="dropdown-item" type="button">Crear una clase</button>
                    </div>
                </div>
            </navbar>
            <div className="bg-backgroud">
            </div>
            <div>
                <footer className="page-footer font-small blue fixed-bottom">
                    <button className="btn" type="button">
                        <img src="https://previews.123rf.com/images/martialred/martialred1507/martialred150700895/42620736-pregunta-icono-del-arte-ayuda-en-l%C3%ADnea-para-aplicaciones-y-sitios-web.jpg" width="30" height="30"></img>
                    </button>
                </footer>
            </div>
        </div>
        );
    }
}