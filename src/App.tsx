import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Landing from "./Landing";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
