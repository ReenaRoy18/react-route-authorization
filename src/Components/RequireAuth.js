import React from "react";
import useAuth from "../Hooks/useAuth";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { auth } = useAuth();
  console.log(allowedRoles);

//   return auth?.username ? (
//     // if auth.username is available then it goes to outlet or else it will return to login
//     <Outlet />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

  return allowedRoles?.includes(auth?.role) ? ( //for role-based authorization we use this.
    
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};


export default RequireAuth;
