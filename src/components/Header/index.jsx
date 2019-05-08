import React, { useState } from 'react';

import className from '../../utils/className';

import SearchForm from './SearchForm';
import Navigation from './Navigation';

function Header() {
  const [collapseNavbar, setCollapseNavbar] = useState(true);

  function toggleNavbar() {
    setCollapseNavbar(!collapseNavbar);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">Carousel</a>
        <button className="navbar-toggler" type="button"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                onClick={ toggleNavbar }>
          <span className="navbar-toggler-icon"/>
        </button>
        <div className={ className({ "navbar-collapse": true, "collapse": collapseNavbar }) }>
          <Navigation/>
          <SearchForm/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
