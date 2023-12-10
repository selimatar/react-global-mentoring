import React, { useState } from 'react';
import styles from './search-form.module.css'

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
    <div className="search-form" style={{margin: "40px"}}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="What do you want to watch?" 
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className={styles.searchButton} onClick={onSearch(query)}>Search</button>
    </div>
  );
}

export default SearchForm;