import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCy6KEMNQGPVMSH7Lgk72LHwwejwORHOmI",
  authDomain: "aprende-f9370.firebaseapp.com",
  databaseURL: "https://aprende-f9370.firebaseio.com",
  projectId: "aprende-f9370",
  storageBucket: "",
  messagingSenderId: "882396673594",
  appId: "1:882396673594:web:d2421648c7a89a14"
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Auth Api
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };
  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };
  doSignOut = () => app.auth();
}
