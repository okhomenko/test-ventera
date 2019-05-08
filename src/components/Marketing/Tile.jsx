import React from 'react';

function Tile(props) {
  const { img, imgAlt, header, description, link } = props;

  return (
    <>
      <img className="rounded-circle"
           src={ img }
           alt={ imgAlt } width="140" height="140"/>
      <h2>{ header }</h2>
      <p>{ description }</p>
      <p><a className="btn btn-secondary" href={ link } role="button">View details &raquo;</a></p>
    </>
  );
}

export default Tile;
