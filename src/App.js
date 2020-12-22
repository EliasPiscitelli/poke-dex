import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
// Components
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
