import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText

} from "reactstrap";
import './ProductCard.css';

const ProductCard = (props) => {
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
       <Button onClick={() =>
            props.history.push(`/products/${props.product.id}`)
          }
       color="success">Detail</Button>{" "}
      </CardBody>
    </Card>
  );
};
export default ProductCard;
