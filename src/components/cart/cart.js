import React from "react";
import { Button, Col, Row } from "reactstrap";

let token = localStorage.getItem("bangazon_token");

const CartList = (props) => {
  fetch("http://localhost:8000/products/cart", {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((result) => result.json())
    .then((list) => console.log(list));

  return (
    <>
      <h1>C A R T I B L I S T</h1>
    </>
  );
};

export default CartList;
