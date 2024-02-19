import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../data";
import CartCard from "../Components/Cards/CartCard";
export default function Cart() {
  const [cart, setCart] = useState();
  useEffect(() => {
    if (data.length > 0) {
      setCart(data);
    }
  }, [data]);

const handleQuantityBtn= (type, id )=>{
  console.log(type,id) 
  let cardCopy=[...cart]; //to copy a cart value to  array
  const itemSelected= cardCopy.filter((d,i ) => d.id === id)
  itemSelected[0].quantity += 1;
  console.log(itemSelected)
  setCart(cardCopy);
}

  return (
    <section>
      <div id="Cart-listing-card" className="container  m-4 ">
        <Row>
          {data.length > 0 ? (
            data.map((d, i) => (
              <Col className="mt-3 " xs={6} sm={6} md={4} lg={3}>
                <CartCard key={`Cart-card-${i}`} data={d}  quantityCb={handleQuantityBtn} />
              </Col>
            ))
          ) : (
            <p>Is not avalaible today</p>
          )}
        </Row>
      </div>
      <div className="cart-calculator">
        <ul>
          {data.length > 0 && data.map((d, i) => <li>{d?.name} x {d.quantity} </li>)}

        </ul>
      </div>
    </section>
  );
}
