import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Login from './auth/Login';
import Register from './'

import ApplicationViews from "./ApplicationViews";

const App = () => {
  return (
    <React.Fragment>
      <Route render={(props) => <NavBar {...props} />} />
      <Route render={(props) => <Login {...props} />} />
      <Route render={(props) => <Register {...props} />} />

      <ApplicationViews />
    </React.Fragment>
  );
};

export default App;
