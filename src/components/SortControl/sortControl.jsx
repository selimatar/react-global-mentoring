import React from 'react';
import styles from './sortControl.module.css';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleSelectionChange = (event) => {
    onSelectionChange(event.target.value);
  };

  return (
    <div className={styles.sortControl} role="form">
      <label className={styles.sortBySelect} htmlFor="sort-by-select">Sort by:</label>
      <select className={styles.releaseDate} id="sort-by-select" value={currentSelection} onChange={handleSelectionChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;