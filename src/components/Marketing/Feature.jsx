import React from 'react';
import className from '../../utils/className';

function Feature(props) {
  const { header, description, img, imgAlt, imgAlign } = props;

  function isLeftAligned() {
    return imgAlign === 'left';
  }

  return (
    <div className="row">
      <div className={ className({ 'col-md-7': true, 'order-md-2': isLeftAligned() }) }>
        <h2 className="feature-heading">{ header }</h2>
        <p className="lead">{ description }</p>
      </div>
      <div className={className({ 'col-md-5': true, 'order-md-1': isLeftAligned() })}>
        <img className="img-fluid mx-auto" src={img}
             alt={imgAlt} />
      </div>
    </div>
  );
}

export default Feature;
