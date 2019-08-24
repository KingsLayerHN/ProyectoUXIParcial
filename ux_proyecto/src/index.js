import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
//import { far } from '@fortawesome/free-regular-svg-icons';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons';
window.jQuery = window.$ = $;
require('datatables');
//library.add(far, fab);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
