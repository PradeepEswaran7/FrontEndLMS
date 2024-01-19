import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const ExampleCarouselImage = ({ src, alt, text }) => (
  <div className="carousel-image-container">
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{  height: '400px' }}
    />
    <div className="carousel-image-overlay">
      <p className="overlay-text">{text}</p>
    </div>
  </div>
);

const innerStyles = `
    .carousel-image-container {
      position: relative;
    }

    .carousel-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .carousel-image-container:hover .carousel-image-overlay {
      opacity: 1;
    }

    .overlay-text {
      color: white;
      font-size: 20px;
      text-align: center;
    }
  `;

const HomeShowAd = () => {
  return (
    <div>
        <style>{innerStyles}</style>
      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage
            src="https://icomgroup.org/wp-content/uploads/2022/01/LMS-cover-01-768x357.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage
            src="https://uktechnews.co.uk/wp-content/uploads/2022/12/laptop-1071781-1536x908.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            src="https://blog.gocadmium.com/hubfs/Blog-IMAGES%20%287%29.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeShowAd;
