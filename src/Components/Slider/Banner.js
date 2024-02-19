import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const posterData = [
  {
    id: 1,
    image:
      " https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_120329-3345.jpg",
    label: "cheese pizza",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-psd/fast-food-restaurant-landing-page_23-2148987497.jpg?size=626&ext=jpg&ga=GA1.1.874248855.1693290431&semt=ais",
    label: "last slice ",
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/hand-drawn-pizza-horizontal-banner_23-2150267796.jpg?size=626&ext=jpg&ga=GA1.1.874248855.1693290431&semt=ais",
    label: "buy 2 get one",
  },
];

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {posterData &&
        posterData.map((d, i) => (
          <Carousel.Item key={`offer-banner-${d.id}`} >
            <img src={d?.image} alt={d?.label} />
            <Carousel.Caption>
              <h3> {d?.label} </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Banner;
