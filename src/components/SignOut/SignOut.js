import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signoutButton">
    Cerrar Cesion
  </button>
);
export default withFirebase(SignOutButton);