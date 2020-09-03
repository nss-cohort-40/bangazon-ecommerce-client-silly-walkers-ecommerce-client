import React, { useState, useEffect } from 'react';
import ProductCard from "../../helpers/ProductCard";
import { Container, CardDeck } from "reactstrap";

const ProductDetails = (props) => { 
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = (id) => {
    return fetch(`http://localhost:8000/products/${id}`)
      .then((result) => result.json())
      .then((productDetails) => {
        setProductDetails(productDetails);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
    <h1>Product Detail Page</h1>
     <div className="row">
      <Container>
        <CardDeck>
          {productDetails.map((product) => (
            <ProductCard key={product.id} product={product} {...props} />
          ))}
        </CardDeck>
      </Container>
    </div> 
    </>
  );
};


export default ProductDetails;
