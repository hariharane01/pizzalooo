import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Productcard({ data={}}) {
  return (
    <Card >
      <Card.Img variant="top" src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name} </Card.Title>
        <Card.Text>{data.price}</Card.Text>
        {data?.size?.length > 0 ?<Button variant="primary">view size</Button> : <Button variant="primary">Add Cart</Button> }
        
      </Card.Body>
    </Card>
  );
}

export default Productcard;
