/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "./FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
