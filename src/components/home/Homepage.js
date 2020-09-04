import React, { useState, useEffect } from "react";
import ProductCard from "../../helpers/ProductCard";
import { Row, Col, Container, CardDeck } from "reactstrap";

const HomepageProductList = (props) => {
  const [productInfo, setProductInfo] = useState([]);

  const getProducts = () => {
    return fetch("http://localhost:8000/products")
      .then((result) => result.json())
      .then((productInfo) => {
        setProductInfo(productInfo);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row">
      <Container>
        <CardDeck>
          {productInfo.map((product) => (
            <ProductCard key={product.id} product={product} {...props} />
          ))}
        </CardDeck>
      </Container>
    </div>
  );
};

export default HomepageProductList;
