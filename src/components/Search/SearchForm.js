import React, { useState } from 'react';
import './search-form.css'

const SearchForm = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if(query) {
      onSearch(query);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div style={{margin: "40px"}}>
      <h3>Search Form Component</h3>
      <input
        className="search-input"
        type="text"
        placeholder="What do you want to watch?" 
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;