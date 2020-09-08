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
  const [productDetails, setProductDetails] = useState({ product_type: {} });
  const pid = props.productId;

  const getProductDetails = (props) => {
    fetch(`http://localhost:8000/products/${pid}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("bangazon_token")}`,
      },
    })
      .then((result) => result.json())
      .then((productDetails) => {
        setProductDetails(productDetails);
      });
  };

  const addProductToCart = (product_id) => {
    const product = { product_id: `${product_id}` };
    fetch(`http://localhost:8000/orders`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("bangazon_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((data) => data.json());
  };

  useEffect(() => {
    getProductDetails(pid);
  }, []);
  return (
    <>
      <Card className="style-card card">
        <CardImg
          className="detail-card-img card-img-top"
          top
          width="100%"
          src={productDetails.imagePath}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{productDetails.title}</CardTitle>
          <CardSubtitle>Price: ${productDetails.price}</CardSubtitle>
          <CardText>Location: {productDetails.location}</CardText>
          <CardText>Quantity: {productDetails.quantity}</CardText>
          <CardText>Type: {productDetails.product_type.name}</CardText>
          <CardText>Description: {productDetails.description}</CardText>
          <Button
            color="success"
            onClick={() => {
              addProductToCart(pid);
              props.history.push(`/products/cart`);
            }}
          >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductDetails;
