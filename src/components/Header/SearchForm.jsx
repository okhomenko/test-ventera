import React, { useState } from 'react';

function SearchForm() {
  const [search, setSearchValue] = useState('');

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Searching...", search);
  }

  return (
    <form className="form-inline mt-2 mt-md-0" onSubmit={ handleSubmit }>
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={ search }
        onChange={ handleInputChange }
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
