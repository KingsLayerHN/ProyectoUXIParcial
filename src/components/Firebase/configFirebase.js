import app from "firebase/app";
import "firebase/auth";
import firestore from 'firebase/firestore';

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
    this.db = app.firestore();
  }

  // Auth Api
  //create a user with password
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  //sign in with user and password
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  //reset password
  pswReset = email => this.auth.sendPasswordResetEmail(email);

  //update password
  pswUpdate = password => this.auth.currentUser.updatePassword(password);
}
