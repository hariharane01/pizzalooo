import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../data";
import CartCard from "../Components/Cards/CartCard";

const cartTotal = (data) => {
  let total = 0;
  if (data.length < 0) {
    total = 0;
  } else {
    data.forEach((d) => {
      total += d.quantity * d.price;
    });
  }
  return total;
};

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setCart(data);
    }
  }, [data]);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cartTotal(cart));
    }
  }, [cart]);

  const handleQuantityBtn = (type, id) => {
    let cardCopy = [...cart]; //to copy a cart value to  array
    const itemSelected = cardCopy.find((d) => d.id === id);
    if (type === "0") {
      itemSelected.quantity += 1;
    }
     if (type === "1" && itemSelected.quantity > 0){
      itemSelected.quantity -= 1;
    }
    setCart(cardCopy);
  };

  return (
    <section id="cart-page-container" className="p-2">
      <div id="Cart-listing-card" className="container  m-4 ">
        <Row>
          {cart.length > 0 ? (
            cart.map((d, i) => (
              <Col className="mt-3 " xs={6} sm={6} md={4} lg={3}>
                <CartCard key={i} data={d} quantityCb={handleQuantityBtn} />
              </Col>
            ))
          ) : (
            <p>Is not avalaible today</p>
          )}
        </Row>
      </div>
      <div className="cart-calculator" id="cart-Calculator">
        <ul>
          {cart.length > 0 &&
            cart.map((d, i) => (
              <li key={i}>
                {d?.name} x {d.quantity}
              </li>
            ))}
        </ul>
        <h3>Cart Total </h3>
        <p>{total} </p>
      </div>
    </section>
  );
}
