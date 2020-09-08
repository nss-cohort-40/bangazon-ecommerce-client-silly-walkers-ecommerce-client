import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./ProductCard.css";

const CartProductCard = (props) => {
  return (
    <Card className="style-card card">
      <CardImg
        className="card-img card-img-top"
        top
        width="100%"
        src={props.product.imagePath}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.product.title}</CardTitle>
        <CardSubtitle>${props.product.price}</CardSubtitle>
        <CardText>{props.product.description}</CardText>
        <Button color="danger">Remove Product</Button>{" "}
      </CardBody>
    </Card>
  );
};
export default CartProductCard;
