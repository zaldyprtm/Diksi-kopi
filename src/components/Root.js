import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* Tambahkan rute lain jika diperlukan */}
      </Switch>
    </Router>
  );
};

export default Root;
