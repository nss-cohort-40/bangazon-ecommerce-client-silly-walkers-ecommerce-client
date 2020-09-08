import { Route, withRouter  } from "react-router-dom";
import React from "react";
import Register from "./auth/Register"
import Login from "./auth/Login"
import HomepageProductList from "./home/Homepage";
import SellProductForm from "./sellProduct/sellProduct";
import ShowAccount from "./MyAccount/MyAccount";
import Cart from "./cart/cart";
import ProductDetail from "./productDetails/productDetails";

const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route
        path="/home"
        render={(props) => {
          return <HomepageProductList {...props} />;
        }}
      />
      <Route
        path="/sell"
        render={(props) => {
          return <SellProductForm {...props} />;
        }}
      />{" "}
      <Route
        exact
        path="/products"
        render={(props) => {
          return <ProductDetail {...props} />;
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)"
        render={(props) => {
          return (
            <ProductDetail
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          );
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
      <Route path="/products/cart" render={(props) => <Cart {...props} />} />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
