import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BlackboardNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-white p-0 pr-3">
          <ul className="navbar-nav navOption">
            <li className="nav-item py-3 px-2">
              <a className="nav-link" href="#">
                Blackboard
              </a>
            </li> 
            <li className="nav-item py-3 px-2">
              <a className="nav-link" href="#crear_tarea" data-toggle="modal" data-target="#crear_tarea">
                Tasks
              </a>
            </li>
            <li className="nav-item py-3 px-2">
              <a className="nav-link" href="#">
                Score
              </a>
            </li>
          </ul>
          <button className="icons users-icon" href="#">
            <FontAwesomeIcon icon={["far", "user"]} />
          </button>
        </nav>
        
        
        
        
        
        <div className="modal fade" id="crear_tarea">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                
                    <div className="modal-header">
                        <h5 className="modal-title text-info">Tarea</h5>
                    </div>
            
                    <div className="modal-body">
                        <input
                            placeholder="Título"
                            className="form-control input-style"
                            required>
                        </input>
                        <textarea className="form-control" rows="4" placeholder="Instrucciones (opcional)"></textarea>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <p1>Puntos</p1>
                                <input className="form-control form-control-sm" placeholder="Puntos"></input>
                            </div>
                            <div className="col">
                                <p1>Fecha de entrega:</p1>
                                <div className="input-group date">
                                    <input type="text" className="form-control form-control-sm"></input>
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn">
                            Crear tarea
                        </button>
                        <button
                            type="button"
                            className="btn"
                            data-dismiss="modal">
                            Cancelar tarea
                        </button>
                    </div>
                </div>
            </div>
          </div>
        
        
        
      </div>
        
        
        
        
        
        
        
    );
  }
}
