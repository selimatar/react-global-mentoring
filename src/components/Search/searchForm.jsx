import React, { useState } from 'react';
import './search-form.css'

const SearchForm = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div style={{margin: "40px"}}>
      <input
        className="search-input"
        type="text"
        placeholder="What do you want to watch?" 
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="search-button" onClick={onSearch(query)}>Search</button>
    </div>
  );
}

export default SearchForm;