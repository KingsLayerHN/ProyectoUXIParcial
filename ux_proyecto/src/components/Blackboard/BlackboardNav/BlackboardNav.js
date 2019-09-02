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
              <a className="nav-link" href="#">
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
      </div>
    );
  }
}
