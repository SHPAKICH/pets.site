import React from 'react';
import { Carousel } from 'react-bootstrap';  // Импорт компонента Carousel из React Bootstrap

import catImage from '../media/кошка.jpg';
import goatImage from '../media/коза.jpg';
import mouseImage from '../media/мышь.jpg';

const AnimalCarousel = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="w-50 p-3">
        <Carousel.Item>
          <img
            className="d-block rounded"
            src={catImage}
            alt="Кошка"
            style={{ width: '100%', height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5 className="bg-dark" style={{ borderRadius: '50px', padding: '3px' }}>
              Найден хозяин!
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded"
            src={goatImage}
            alt="Коза"
            style={{ width: '100%', height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5 className="bg-dark" style={{ borderRadius: '50px', padding: '3px' }}>
              Найден хозяин!
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded"
            src={mouseImage}
            alt="Мышь"
            style={{ width: '100%', height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5 className="bg-dark" style={{ borderRadius: '50px', padding: '3px' }}>
              Найден хозяин!
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AnimalCarousel;
