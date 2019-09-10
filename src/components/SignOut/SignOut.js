import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="bg-0 m-0 p-0 b-0">
    Cerrar Cesion
  </button>
);
export default withFirebase(SignOutButton);