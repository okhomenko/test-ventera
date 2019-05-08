import React from 'react';

function Slide(props) {
  const { img, imgAlt, header, description, actionLabel, actionLink, textAlign, isActive } = props;

  function getTextAlignClass() {
    switch (textAlign) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return '';
    }
  }

  return (
    <div className={ "carousel-item " + (isActive ? "active" : "") }>
      <img src={ img } alt={ imgAlt }/>
      <div className="container">
        <div className={ "carousel-caption " + getTextAlignClass() }>
          <h1>{ header }</h1>
          <p>{ description }</p>
          <p><a className="btn btn-lg btn-primary" href={ actionLink } role="button">{ actionLabel }</a></p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
