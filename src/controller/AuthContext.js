import React, { useEffect, useState } from "react";
import firebase from "../model/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);

  // LOGIN OR REGISTER
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
