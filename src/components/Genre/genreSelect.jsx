import React, { useState, useEffect } from 'react';
import Genre from './genre';
import './genre-list.css';

const GenreSelect = ({ genreList, currentSelected, selectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState(currentSelected);
  const [activeIndex, setActiveIndex] = useState(1);

  // Use useEffect to update the active tab when currentSelected changes
  useEffect(() => {
    const initialIndex = genreList.findIndex((genre) => genre.name === currentSelected);
    if (initialIndex !== -1) {
      setActiveIndex(initialIndex + 1);
    }
  }, [currentSelected, genreList]);

  const checkActive = (index, className) => (activeIndex === index ? className : '');

  const handleClick = (index) => {
    const existedGenre = selectGenre(index);
    if (existedGenre) {
      setSelectedGenre(existedGenre.name);
    }
    setActiveIndex(index);
  };

  return (
    <div style={{ width: "50%", margin: 40 }}>
      <h3>Genre List Component</h3>
      <div className="tabs">
        {genreList && genreList.map((genre, index) => (
            <Genre
                key={genre.id}
                genre={genre}
                checkActive={checkActive}
                handleClick={() => handleClick(index + 1)} // Adjust index here
            />
        ))}
      </div>
      <div className={`panel ${checkActive(activeIndex, 'active')}`}>
        <p title={selectedGenre}>{selectedGenre}</p>
      </div>
    </div>
  );
};

export default GenreSelect;
