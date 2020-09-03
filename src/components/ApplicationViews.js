// import { Route } from "react-router-dom"
import React from "react";
import { withRouter, Route } from "react-router-dom";
import HomepageProductList from "./home/Homepage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import SellProductForm from "./sellProduct/sellProduct";
import product from "./productDetails/productDetails"

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        path="/home"
        render={(props) => {
          return <HomepageProductList {...props} />;
        }}
      />
      ;
      <Route
        path="/sell"
        render={(props) => {
          return <SellProductForm {...props} />;
        }}
      />{" "}
      
      <Route
        path="/products"
        render={(props) => {
          return <product {...props} />;
        }}
      />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
