import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LogInPage from "views/examples/LogInPage";
import CemeteryPage from "views/examples/Cemeterypage";
import HomePage from "views/examples/HomePage";
import { AuthContext } from "store/context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Switch>
        {ctx.loginToken && (
          <Route path="/home-page">
            <HomePage />
          </Route>
        )}
        {ctx.loginToken && (
          <Route
            path="/cemetery-page"
            render={(props) => <CemeteryPage {...props} />}
          />
        )}

        {ctx.loginToken && (
          <Route
            path="/about-page"
            render={(props) => <ProfilePage {...props} />}
          />
        )}

        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LogInPage {...props} />}
        />
        <Route path="*">
          <Redirect to="/login-page"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
