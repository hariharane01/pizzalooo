import React from "react";
import Navigation from "../Components/NAVBAR/Navigation";
import Productcard from "../Components/Cards/ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { data } from "../data";

export default function Cart() {
  return (
    <section>
     
      <Navigation />
      <div id="Product-listing-card" className="container  ">
        <Row>
          {data.length > 0 ? (
            data.map((d, i) => (
              <Col className="mt-3" xs={6} sm={6} md={4} lg={3} >
                <Productcard key={`product-card-${i}`} data={d} />
              </Col>
            ))
          ) : (
            <p>Is not avalaible today</p>
          )}
        </Row>
      </div>
    </section>
  );
}
