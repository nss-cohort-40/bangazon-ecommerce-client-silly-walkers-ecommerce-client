import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./product.css";

const product= (props) => {
   const [isLoading, setIsLoading] = useState(false); 

    const addProduct = evt => {
        evt.preventDefault();
          setIsLoading(true);
          fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Token 786dafdea04d9cce0eace5a8ac81a0052895bed8`,
            },
            body: JSON.stringify(addProduct),
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("Added to Cart");
            props.history.push("/products/cart");
        })
        .catch((error) => {
          console.log(error);
        });
    };



  return (
    <div className="product">
      <div className="product-content">
     <center><h1>Product Details</h1></center> 
     <h2>
          Product Title: <span className="product-title">{props.product.title}</span>
        </h2>
        <h2>
          Product Type: <span className="product-title">{props.product.type}</span>
        </h2>
        <h2>
          Product Price: <span className="product-price">{props.product.price}</span>
        </h2>
        <h2>
          Product Quantity: <span className="product-quantity">{props.product.quantity}</span>
        </h2>
        <h2>
          Product Location: <span className="product-location">{props.product.location}</span>
        </h2>
        <h2>
          Product Description: <span className="product-description">{props.product.description}</span>
        </h2>
        <picture>
        <h2>Upload Photo:</h2>
          <img src={props.product.photo} alt="Item for Sale" />
        </picture>
       
        <Link to={`/products/${props.product.id}`}>
          <button type="button" disabled={isLoading} >Add to Cart</button>
        </Link>
      </div>
    </div>
    );
  };


export default product;
