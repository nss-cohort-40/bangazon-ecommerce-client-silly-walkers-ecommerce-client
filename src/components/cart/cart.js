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

  return (
    <div>
    <div className="row">
      <Container>
        <CardDeck>
          {cartList.map((product, index) => (
            <CartProductCard key={index} product={product} {...props} />
          ))}
        </CardDeck>
      </Container>
    </div>
    <div className="text-center p-5">
    <Button color="danger">Cancel Order</Button>
    </div>
    </div>
  );
};

export default Cart;
