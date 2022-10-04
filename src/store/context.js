import React from "react";

export const AuthContext = React.createContext({
  loginToken: "",
  registerToken: "",
  isLoggedIn: false,
  login: (token) => {},
  register: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const loginToken = localStorage.getItem("login-token");
  const registerToken = localStorage.getItem("register-token");

  const isLoggedIn = !!loginToken;

  const loginHandler = (token) => {
    localStorage.setItem("login-token", token);
  };

  const registerHandler = (token) => {
    localStorage.setItem("register-token", token);
  };

  const logoutHandler = () => {
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
