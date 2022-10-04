import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "views/Index.js";

import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LogInPage from "views/examples/LogInPage";
import CemeteryPage from "views/examples/Cemeterypage";
import HomePage from "views/examples/HomePage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        &&{" "}
        <Route path="/home-page">
          <HomePage />
        </Route>
        <Route
          path="/cemetery-page"
          render={(props) => <CemeteryPage {...props} />}
        />
        <Route
          path="/about-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LogInPage {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
