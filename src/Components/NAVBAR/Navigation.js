import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigator = useNavigate();

  const routeToHome=() =>{
    navigator('/')
  }
    const routeToCart= () =>{
      navigator('/cart') 
     
        
    }

  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div onClick={routeToHome}
              style={{ width: "100%", display: "flex", alignItems: "center"   }}
            >
              <img
                alt=""
                src="https://i.pinimg.com/736x/3e/f6/70/3ef6706c547372b9c593e8c600e70c9a.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <p style={{ color: "#fff", margin: "opx", fontSize:"25px" }}>Pizzaalooo</p>
            </div>

            <IoCart color="white"  onClick={routeToCart}/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
