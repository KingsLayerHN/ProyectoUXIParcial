import React, {Component} from "react";
export default class BlackboardTask extends Component{
    render(){
        return(
        <nav className="navbar navbar-light bg-white">
            <div className="dropdown mr-3" aria-labelledby="dropdownMenu2">
                <button type="button" className="dropdown-toggle btn btn-info bg-info text-light" data-toggle="dropdown">
                    +  Crear
                </button>
                <div className="dropdown-menu">
                    <button data-toggle="modal" data-target="#crear_tarea" className="dropdown-item" type="button">Tarea</button>
                </div>
            </div>
            
            
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
                            Unirse
                        </button>
                        <button
                            type="button"
                            className="btn"
                            data-dismiss="modal">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
          </div>
                
    </nav>
        );  
    }
}
