import React, { useState, useEffect } from "react";
import { Button, Container, CardDeck } from "reactstrap";
import CartProductCard from "../../helpers/cartProductCard";

let token = localStorage.getItem("bangazon_token");

const Cart = (props) => {
  const [cartList, setCartList] = useState([]);
  const [orderId, setOrderId] = useState({});

  const getCartList = () => {
    fetch("http://localhost:8000/products/cart", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((result) => result.json())
      .then((list) => {
        setCartList(list);
        setOrderId(list[0].order_id);
      });
  };

  //   const deleteOrder = (id) => {
  //     fetch(`http://localhost:8000/orders/${id}`, {
  //       method: "DELETE",
  //     }).then((result) => result.json());
  //   };

  useEffect(() => {
    getCartList();
  }, []);
  console.log(orderId);
  return (
    <div className="row">
      <Container>
        <CardDeck>
          {cartList.map((product) => (
            <CartProductCard key={product.id} product={product} {...props} />
          ))}
        </CardDeck>
      </Container>
      <Button color="danger">Cancel Order</Button>
    </div>
  );
};

export default Cart;
