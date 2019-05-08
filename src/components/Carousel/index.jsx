import React from 'react';

import className from '../../utils/className';
import genUniqueId from '../../utils/getUniqueId';

import Slide from './Slide';

import './Carousel.scss';

function Carousel(props) {
  const { slides } = props;

  // to support multiple carousels on one page we must generate unique id
  const carouselName = 'myCarousel' + genUniqueId();

  return (
    <div id={ carouselName } className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">

        { slides.map((slide, idx) => (
          <li
            data-target={ "#" + carouselName }
            data-slide-to={ idx }
            className={ className({ active: idx === 0 }) }
            key={ idx }
          />
        )) }

      </ol>

      <div className="carousel-inner">

        { slides.map((slide, idx) =>
          <Slide key={ slide.id } { ...slide } isActive={ idx === 0 }/>
        ) }

      </div>

      <a className="carousel-control-prev" href={ "#" + carouselName } role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"/>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={ "#" + carouselName } role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"/>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
