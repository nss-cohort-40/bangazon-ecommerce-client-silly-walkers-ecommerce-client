import React from "react";
import { Button, Col, Row } from "reactstrap";

const CartList = (props) => {
  fetch("http://localhost:8000/products/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.bangazaon_token.value}`,
    },
  });
};
