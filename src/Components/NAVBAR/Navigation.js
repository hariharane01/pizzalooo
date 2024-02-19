import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <>
      <Navbar className="bg-dark"> 
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.pinimg.com/736x/3e/f6/70/3ef6706c547372b9c593e8c600e70c9a.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pizzaalooo 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
