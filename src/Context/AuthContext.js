import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>  
    {/* // we are providing this value to all the children */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


//We have to provide authorization for whole application. This Authcontext.provider will provide context for all components.So, we provide Authprovider for all the components.