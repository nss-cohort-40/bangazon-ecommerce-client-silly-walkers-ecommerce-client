import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./nav/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <Route render={(props) => <NavBar {...props} />} />
    </React.Fragment>
  );
};

export default App;
