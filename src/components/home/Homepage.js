import React, { useState, useEffect } from "react";
import HomepageProdCard from "./HomepageProdCard";

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
    <div className="product-container-cards">
      {productInfo.map((product) => (
        <HomepageProdCard key={productInfo.id} product={product} {...props} />
      ))}
    </div>
  );
};

export default HomepageProductList;
