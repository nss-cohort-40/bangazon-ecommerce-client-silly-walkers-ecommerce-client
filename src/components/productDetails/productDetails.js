import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./product.css";

const ProductDetails = (props) => { 
  let token = localStorage.getItem("bangazon_token");
    const listProductDetails = (id) => {
          fetch(`http://localhost:8000/products/${id}`, {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
            },
        })
        .then((response) => response.json())
        .then((productDetails) => {
          setProductInfo(productDetails);
    };
//brings in one product//


  return (
    <div className="productDetails">
      <div className="productDetails-content">
    <center><h1>Product Details</h1></center> 
    <div className="row">
      <Container>
        <CardDeck>
          {productInfo.map((product) => (
            <ProductCard key={productInfo.id} product={product} {...props} />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
        <Link to={`/products/${props.product.id}`}>
          <button type="button">Add to Cart</button>
        </Link>
      </div>
    </div>
    );
  };


export default ProductDetails;
