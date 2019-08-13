import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

import Login from "./components/pages/login/Login";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Login} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
