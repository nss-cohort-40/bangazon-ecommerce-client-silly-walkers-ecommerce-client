import { Route, withRouter  } from "react-router-dom"
import React from "react";
import Register from "./auth/Register"
import Login from "./auth/Login"
import SellProductForm from "./sellProduct/sellProduct";
import ShowAccount from "./MyAccount/MyAccount";

const ApplicationViews = () => {
  return (
    <React.Fragment>
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
        path="/myaccount"
        render={(props) => <ShowAccount  {...props} />} />
    </React.Fragment>
    
  );
};

export default withRouter(ApplicationViews);
