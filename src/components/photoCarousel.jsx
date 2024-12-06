import React from 'react';
import { Carousel } from 'react-bootstrap'; // Импорт компонента Carousel из React Bootstrap

const AnimalCarousel = ({ slides }) => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="w-50 p-3">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block rounded"
              src={slide.image}
              alt={slide.alt}
              style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h5 className="bg-dark" style={{ borderRadius: '50px', padding: '3px' }}>
                {slide.caption}
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AnimalCarousel;
