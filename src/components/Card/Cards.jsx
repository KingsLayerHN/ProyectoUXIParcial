import React, { Component } from "react";
import Card from './Card';
import img from '../../images/Clase.jpg';
import img1 from '../../images/Clase1.jpg';
import img2 from '../../images/Clase2.jpg';


class Cards extends Component {
    render(){
        return(
            <div id="cards_container" className="div.container-fluid.d-flex justify-content-center>">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img} title="Clase" seccion="Seccion" materia="Materia" aula="Aula" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img} title="Clase" seccion="Seccion" materia="Materia" aula="Aula" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;