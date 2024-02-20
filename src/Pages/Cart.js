import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartCard from "../Components/Cards/CartCard";
import { useSelector } from "react-redux";

const cartTotal = (data) => {
  let total = 0;
  if (data.length <0) {
    total = 0;
  } else {
    data.forEach((d) => {
      total += d.quantity * d.price;
    });
  }
  return total;
};

export default function Cart() {
  const { items = [] } = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartTotal(items));
  }, [items]);

  const handleQuantityBtn = (type, id) => {
    let cardCopy = [...cart]; //to copy a cart value to  array
    const itemSelected = cardCopy.find((d) => d.id === id);
    if (type === "0") {
      itemSelected.quantity += 1;
    }
    if (type === "1" && itemSelected.quantity > 0) {
      itemSelected.quantity -= 1;
    }
    setCart(cardCopy);
  };

  return (
    <section id="cart-page-container" className="p-2">
      <div id="Cart-listing-card" className="container  m-4 ">
        <Row>
          {items.length > 0 ? (
            items.map((d, i) => (
              <Col className="mt-3 " xs={6} sm={6} md={4} lg={3}>
                <CartCard key={i} data={d} quantityCb={handleQuantityBtn} />
              </Col>
            ))
          ) : (
            <h3>Cart is Empty😞</h3>
          )}
        </Row>
      </div>
      <div className="cart-calculator" id="cart-Calculator">
        <ul>
          {items.length > 0 &&
            items.map((d, i) => (
              <li key={i}>
                {d?.name} x {d.quantity}
              </li>
            ))}
        </ul>
        <h3>Cart Total: {total} </h3>
      </div>
    </section>
  );
}
