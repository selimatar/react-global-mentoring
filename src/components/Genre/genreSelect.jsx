import React, { useState, useEffect } from 'react';
import Genre from './genre';
import './genre-list.css';

const GenreSelect = ({ genreList, activeGenre, setActiveGenre, selectGenre }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const checkActive = (index, className) => activeIndex === index ? className : "";

    const handleClick = (index) => {
        const existedGenre = selectGenre(index);
        if(existedGenre) {
            setActiveGenre(existedGenre.name);
        }
        setActiveIndex(index);
    };

    return (
        <div style={{width: "50%", margin: 40}}>
            <h3>Genre List Component</h3>
            <div className="tabs">
                {genreList && genreList.map((genre) => {
                    return <Genre key={genre.id} genre={genre} checkActive={checkActive} handleClick={handleClick}/>
                })}
            </div>
            <div className="panels">
                <div className={`panel ${checkActive(activeIndex, "active")}`}>
                    <p title={activeGenre}>{activeGenre}</p>
                </div>
            </div>
        </div>
    );
}

export default GenreSelect;
