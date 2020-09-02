import React, { useState, useEffect } from "react";

const HomepageProductList = (props) => {
  const [productInfo, setProductInfo] = useState([]);

  fetch("http://localhost:8000/products")
    .then((result) => result.json())
    .then((productInfo) => {
      setProductInfo(productInfo);
    });
};
