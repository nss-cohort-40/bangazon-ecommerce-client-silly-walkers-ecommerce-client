import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";


const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  // console.log('This is my thing', props)
  const pid = props.productId
  
  const getProductDetails = (props) => {
     console.log("this is thwhat is an aiask;dgf", props)
    fetch(`http://localhost:8000/products/${pid}`, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
        },
        

    })
    .then((result) => result.json())
    .then((productDetails) => {
        setProductDetails(productDetails);
    });
  };

  useEffect(() => {
    getProductDetails(pid);
  }, []);
  return (
    <>
      <h1>Product Detail Page</h1>
      <h1>{productDetails.title}</h1>
      <h2></h2>
     
    "quantity": 1,
    "price": "15.99",
    "description



    </>
  );
};

export default ProductDetails;
