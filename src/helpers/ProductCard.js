import React from "react";
import {
  Button,
} from "reactstrap";
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className="card">
        <img
          className="card-img card-img-top"
          top
          width="100%"
          src={props.product.imagePath}
          alt={props.product.title}
        />
      <div className="card-body">
        <div className="card-title">{props.product.title}</div>
        <div className="card-text">${props.product.price}</div>
        <div className="card-text">{props.product.description}</div>
        <div className="text-center m-4">
        <Button color="success">Detail</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
