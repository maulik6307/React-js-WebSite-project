import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={500}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack Services</p>
        </div>

        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer to Peer Supports</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
