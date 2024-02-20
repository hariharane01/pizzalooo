import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  handleQuantityChange,
  removeFromCart,
} from "../../Redux/Reducers/Cart.reducer";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

function CartCard({ data = {}, quantityCb = () => {} }) {
  const dispatch = useDispatch();

  function handleItemQuantity(type, id) {
    if (type && id) {
      dispatch(handleQuantityChange({ type: type, id: id }));
    }
  }

  return (
    <Card
      className="product-card"
      style={{ padding: "0px", margin: "0 0 10px 0", width: "100%" }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <Card.Img
          variant="top"
          src={data.imageUrl}
          style={{ width: "120px" }}
          className="cart-product-image"
        />
        <Card.Body>
          <Card.Title>{data.name} </Card.Title>
          <Card.Text>{data.price}</Card.Text>
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Button
              size="sm"
              color="success"
              style={{ margin: "" }}
              onClick={() => handleItemQuantity("1", data.id)}
            >
              -
            </Button>
            <p style={{ margin: "0px" }}> {data.quantity} </p>
            <Button
              size="sm"
              color="success"
              onClick={() => handleItemQuantity("0", data.id)}
            >
              +
            </Button>
            <MdDelete
              color="red"
              onClick={() => dispatch(removeFromCart({ id:data.id }))}
            />
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CartCard;
