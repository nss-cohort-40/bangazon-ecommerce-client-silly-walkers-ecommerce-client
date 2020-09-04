import { Route, withRouter  } from "react-router-dom";
import React from "react";
import Register from "./auth/Register"
import Login from "./auth/Login"
import HomepageProductList from "./home/Homepage";
import SellProductForm from "./sellProduct/sellProduct";
import ShowAccount from "./MyAccount/MyAccount";

const ApplicationViews = (props) => {
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
      />
      <Route
        path="/login"
        render={(props) => <Login {...props} />} /> 
      <Route
        path="/register"
        render={(props) => <Register {...props} />} /> 
      <Route
        exact path="/myaccount"
        render={(props) => <ShowAccount  {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
