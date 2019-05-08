import React from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">Carousel</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <Navigation/>
          <SearchForm/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
