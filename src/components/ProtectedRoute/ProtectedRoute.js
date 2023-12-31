import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { user } = useContext(CurrentUserContext);
  return user ? <Component {...props} /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;