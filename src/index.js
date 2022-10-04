import React from "react";
import ReactDOM from "react-dom/client";


// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import { BrowserRouter} from "react-router-dom";

import App from "App";
import AuthContextProvider from "store/context";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
);
