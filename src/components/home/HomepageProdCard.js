import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const HomepageProdCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.product.imagePath}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.product.title}</CardTitle>
          <CardSubtitle>${props.product.price}</CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <Button color="success">Detail</Button>{" "}
        </CardBody>
      </Card>
    </div>
  );
};
export default HomepageProdCard;
