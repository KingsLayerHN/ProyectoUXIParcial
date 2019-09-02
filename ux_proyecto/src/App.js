import React, { Component } from 'react';
import './App.css';
import Inicio from './components/Loggin/Loggin';
import Registro from './components/Registro/Registro';
import Principal from './components/Principal/Principal';
import Blackboard from './components/Blackboard/Blackboard';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';  

class App extends Component {
  render() {
    return (
        
      <Blackboard />

    );
  }
}

export default App;
