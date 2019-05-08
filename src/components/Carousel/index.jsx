import React, { useState } from 'react';

import className from '../../utils/className';

import Slide from './Slide';

import './Carousel.scss';

function Carousel(props) {
  const { slides } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide((currentSlide - 1) % slides.length);
  }

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  return (
    <div className="carousel slide">
      <ol className="carousel-indicators">

        { slides.map((slide, idx) => (
          <li
            className={ className({ active: idx === currentSlide }) }
            key={ idx }
            onClick={() => setCurrentSlide(idx)}
          />
        )) }

      </ol>

      <div className="carousel-inner">

        { slides.map((slide, idx) =>
          <Slide key={ slide.id } { ...slide } isActive={ idx === currentSlide }/>
        ) }

      </div>

      <a className="carousel-control-prev" role="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" role="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
