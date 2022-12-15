import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const PrivateRoute = () => {
    const location = useLocation()
  const authenticate = JSON.parse(reactLocalStorage.get("adminLogin"));
  console.log(authenticate.status);

  return authenticate.status ?
  <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
};

export default PrivateRoute;
