import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addItemtoCart } from "../../Redux/Reducers/Cart.reducer";

function Productcard({ data = {} }) {
  const dispatcher = useDispatch();
  const { items =[] }=useSelector((state )=> state.cart )

  function handleCart(e, item = {}) {
    if (e && item.id) {
      dispatcher(addItemtoCart(item));
    }
  }

  function handleDisable(){
    return items.filter((i ) => i.id === data.id ).length;
  }

  return (
    <Card>
      <Card.Img variant="top" src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name} </Card.Title>
        <Card.Text>{data.price}</Card.Text>
        {/* {data?.size?.length > 0 ?<Button variant="primary">view size</Button> : <Button variant="primary">Add Cart</Button> } */}
        <Button variant="primary" onClick={(e) => handleCart(e, data)}
        disabled={handleDisable()>0 ? true : false}
        >
          Add Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Productcard;
