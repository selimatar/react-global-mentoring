import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './movieTile.css';

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowContextMenu(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  const handleEditClick = () => {
    setShowContextMenu(false);
    navigate(`/${movieInfo.id}/edit`);
    onEdit();
  };

  const handleDeleteClick = () => {
    setShowContextMenu(false);
    onDelete();
  };

  return (
      <>
        <div className="movie-tile" title="movieTitle">
          <div className="movie-actions-container">
            <div className="movie-tile-actions">
              <button className="movie-tile-context-menu-button" onClick={handleContextMenu} ref={dialogRef}>...</button>
              {showContextMenu && (
                <div className="context-menu" onBlur={handleContextMenuClose}>
                  <button className="context-menu-button" onClick={handleEditClick}>Edit</button>
                  <button className="context-menu-button" onClick={handleDeleteClick}>Delete</button>
                </div>
              )}
            </div>
            <div className="movie-image-container">
              <img className="movie-image" onClick={onClick} src={movieInfo.poster_path} alt={movieInfo.title} />
            </div>
          </div>
          <div className="movie-tile-details">
            <div className="movie-name-and-year">
              <h2 className="movie-name">{movieInfo.title}</h2>
              <p className="movie-year">{movieInfo.release_date.substring(0, 4)}</p>
            </div>
            <p className="movie-genres">{movieInfo.genres.join(', ')}</p>
          </div>
        </div>
      </>
  );
};

export default MovieTile;