// import { Route } from "react-router-dom"
import React from "react";
import { withRouter, Route } from "react-router-dom";
// import Register from "./auth/Login"
// import Login from "./auth/Login"
import SellProductForm from "./sellProduct/sellProduct";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        path="/sell"
        render={(props) => {
          return <SellProductForm {...props} />;
        }}
      />{" "}
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
