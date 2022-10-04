import React, { useState } from "react";

export const AuthContext = React.createContext({
  loginToken: null,
  registerToken: null,
  isLoggedIn: false,
  login: (token) => {},
  register: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
    const [loginToken, setLoginToken] = useState();
    const [registerToken, setRegisterToken] = useState();

 

  const isLoggedIn = !!loginToken === !!registerToken;

  const loginHandler = (token) => {
    setLoginToken(token)
    localStorage.setItem("login-token", token);
  };

  const registerHandler = (token) => {
    setRegisterToken(token)
    localStorage.setItem("register-token", token);
  };

  const logoutHandler = () => {
    setLoginToken(null);
    setRegisterToken(null);
   
    localStorage.clear();
  };

  const contextValue = {
    loginToken,
    registerToken,
    isLoggedIn,
    login: loginHandler,
    register: registerHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
