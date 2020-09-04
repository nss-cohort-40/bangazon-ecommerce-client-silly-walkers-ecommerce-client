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
import "./productDetails.css";


const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState({product_type:{}});
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
     <Card className="style-card card">
      <CardImg
        className="card-img card-img-top"
        top
        width="100%"
        src={productDetails.imagePath}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{productDetails.title}</CardTitle>
        <CardSubtitle> Price:${productDetails.price}</CardSubtitle>
        <CardText> Location: {productDetails.location}</CardText>
        <CardText> Quantity: {productDetails.quantity}</CardText>
        <CardText> Type: {productDetails.product_type.name}</CardText>
        <CardText> Description: {productDetails.description}</CardText>
        <Button color="success">Add to Cart</Button>{" "}
      </CardBody>
    </Card>
    </>
  );
};

export default ProductDetails;
