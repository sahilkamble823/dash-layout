import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from '../context/Auth';

export default function AuthGuard({children}) {
  const auth = useContext(AuthContext);
 
  if (!auth?.userLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
