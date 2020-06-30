import React from "react";
import image1 from "../img/landing1.jpg";
import image2 from "../img/landing2.jpg";
import image3 from "../img/landing3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Title from "./title";
import Product from "./product";
import Contact from "./contact";
import FooterTop from "./footerTop";
const h3 = {
  color: "white",
};
class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3 style={h3}>First slide label</h3>
              <p style={h3}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Third slide" />

            <Carousel.Caption>
              <h3 style={h3}>Second slide label</h3>
              <p style={h3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3 style={h3}>Third slide label</h3>
              <p style={h3}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/***************** */}
        <Title />
        <Product />
        <FooterTop />
      </div>
    );
  }
}
export default Landing;
