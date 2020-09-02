import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import JoesList from "./components/JoesList";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <JoesList />
  </Router>,
  document.getElementById("root")
);
