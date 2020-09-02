import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./product.css";

const product= (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const addProduct = evt => {
        evt.preventDefault();
          setIsLoading(true);
          ProductManager.post(product)
            .then(() => props.history.push("/cart"));
        }
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
          <button>Add to Cart</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/products/${props.product.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default product;
