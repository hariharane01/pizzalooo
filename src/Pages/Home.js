import React from "react";
import Banner from "../Components/Slider/Banner";
import Productcard from "../Components/Cards/ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { UseSelector, useSelector } from "react-redux";

 
export default function Home() {
  const {products=[ ]} = useSelector(( state)=> state.product)


  return (
    <section>
      <Banner />
      <div id="Product-listing-card" className="container  ">
        <Row>
          {products.length > 0 ? (
            products.map((d, i) => (
              <Col className="mt-3" xs={6} sm={6} md={4} lg={3}>
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
