import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import $ from "jquery";
import "bootstrap";
import "popper.js";
import "bootstrap/dist/css/bootstrap.css";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import * as firebase from "firebase";
import "./animate.css";

//add a configuraition to use firebase
const config = {
  apiKey: "AIzaSyCy6KEMNQGPVMSH7Lgk72LHwwejwORHOmI",
  authDomain: "aprende-f9370.firebaseapp.com",
  databaseURL: "https://aprende-f9370.firebaseio.com",
  projectId: "aprende-f9370",
  storageBucket: "",
  messagingSenderId: "882396673594",
  appId: "1:882396673594:web:d2421648c7a89a14"
};

firebase.initializeApp(config);
library.add(far, fab, fas); // add prefix to use fontAwesome regular and brands
window.jQuery = window.$ = $;
require("datatables");
//library.add(far, fab);

ReactDOM.render(<App />, document.getElementById("root"));
