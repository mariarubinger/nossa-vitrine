import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/imgs/banner1.png';
import banner2 from '../../assets/imgs/banner2.png';
import banner3 from '../../assets/imgs/banner3.png';

function Slider() {

  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ANUNCIE HOJE</h3>
          <p>SEUS PRODUTOS NOVOS OU USADOS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>COMPRE PRODUTOS</h3>
          <p>COM PREÇOS IMBATÍVEIS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

  export default Slider;
