import React, { Fragment } from 'react';

import Feature from './Feature';
import Tile from './Tile';

import './Marketing.scss';

function Marketing(props) {
  const { features, tiles } = props;

  return (
    <div className="container marketing">

      <div className="row">

        { tiles ? tiles.map(tile => (
          <div className="col-lg-4" key={ tile.id }>
            <Tile { ...tile }/>
          </div>
        )) : null }

      </div>

      <hr className="marketing-divider"/>

      { features ? features.map(feature => (
        <Fragment key={ feature.id }>
          <Feature { ...feature }/>
          <hr className="marketing-divider"/>
        </Fragment>
      )) : null }

    </div>
  );
}

export default Marketing;
