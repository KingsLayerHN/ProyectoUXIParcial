import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import add from "./add.svg";

export default class Principal extends Component {
       
render() {
    return (
      <nav className=" navbar  navbar-expand-lg navbar-light bg-white page-header ">
        <div className="btn-group dropright">
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button"></button>
          </div>
        </div>
        <div id="plusButton" className="dropdown dropleft ml-auto">
          <button
            className="dropdown-toogle icons"
            href="#"
            id="dropdownMenu2"
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button" data-toggle="modal" data-target="#mostrar_apuntarse">
              Apuntarse en una clase
            </button>
            <button className="dropdown-item" type="button"  data-toggle="modal" data-target="#mostrar_crear">
              Crear una clase
            </button>
          </div>
        </div>

        <div id="userButton" className=" dropdown btn-group dropleft mr-3">
          <button
            className="dropdown-toogle icons"
            href="#"
            id="dropdownMenu2"
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={["far", "user"]} />
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              Cerrar sesión
            </button>
          </div>
        </div>
        
        <div className="modal" id="mostrar_apuntarse">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Apuntarse a una clase</h4> 
                    </div>
                <div className="modal-body">
                    <h6>Pídele el código de la clase a tu profesor e introdúcelo aquí.</h6>
                </div>
                <div className="modal-body">
                       <form action="/action_page.php" className="was-validated">
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <div className="input-group-prepend">
                                        <span1 className="input-group-text bg-info">
                                            <h6 className="text-light">Código</h6>
                                        </span1>
                                    </div>
                                    <input className="form-control" placeholder="Codigo de la clase" required></input>
                                    <div className="valid-feedback">Entrada en proceso</div>
                                    <div className="invalid-feedback">Por favor introduce el código</div>
                                </label>
                            </div>
                        </form>
                </div>             
                    <div className="modal-footer">
                        <button type="button" className="btn bt-info">Unirse</button>
                        <button type="button" className="btn btn-info" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="mostrar_crear">
            <div className="modal-dialog">
                <div className="modal-content">
                    
                <div className="modal-header text-center">
                        <h1 className="text-info lead text-center">Crear una clase</h1> 
                </div>
                <div className="modal-body">
                       <form action="/action_page.php" className="was-validated">
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <div className="input-group-prepend">
                                    </div>
                                   <input placeholder="Nombre de la clase (obligatorio)" className="form-control" required></input>
                                    <div className="valid-feedback">Entrada en proceso</div>
                                    <div className="invalid-feedback">Por favor introduce el nombre de la clase</div>
                                </label>
                            </div>        
                        </form>
                </div>
                <div className="modal-body">
                       <form action="/action_page.php" className="was-validated">
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <div className="input-group-prepend">
                                    </div>
                                   <input placeholder="Sección" className="form-control" required></input>
                                    <div className="valid-feedback">Entrada en proceso</div>
                                    <div className="invalid-feedback">Por favor introduce la sección</div>
                                </label>
                            </div>        
                        </form>
                </div>
                <div className="modal-body">
                       <form action="/action_page.php" className="was-validated">
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <div className="input-group-prepend">
                                    </div>
                                   <input placeholder="Materia" className="form-control" required></input>
                                    <div className="valid-feedback">Entrada en proceso</div>
                                    <div className="invalid-feedback">Por favor introduce la materia</div>
                                </label>
                            </div>        
                        </form>
                </div>
                <div className="modal-body">
                       <form action="/action_page.php" className="was-validated">
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <div className="input-group-prepend">
                                    </div>
                                   <input placeholder="Aula" className="form-control" required></input>
                                    <div className="valid-feedback">Entrada en proceso</div>
                                    <div className="invalid-feedback">Por favor introduce el aula</div>
                                </label>
                            </div>        
                        </form>
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info">Crear</button>
                        <button type="button" className="btn btn-info" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
      </nav>
      //add all class component here!!
        
    );
  }
    
    
}
