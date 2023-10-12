import React, { useState, useRef, useEffect } from 'react';
import './movieTile.css';

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowContextMenu(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContextMenu]);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowContextMenu(true);
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
  };

  const handleEditClick = () => {
    setShowContextMenu(false);
    onEdit();
  };

  const handleDeleteClick = () => {
    setShowContextMenu(false);
    onDelete();
  };

  return (
      <>
        <div className="movie-tile" title="movieTitle">
          <div className="movie-image-container">
            <img className="movie-image" onClick={onClick} src={movieInfo.poster_path} alt={movieInfo.title} />
            <div className="movie-tile-actions">
              <button className="movie-tile-context-menu-button" onClick={handleContextMenu} ref={dialogRef}>...</button>
              {showContextMenu && (
                <div className="context-menu" onBlur={handleContextMenuClose}>
                  <button className="context-menu-button" onClick={handleEditClick}>Edit</button>
                  <button className="context-menu-button" onClick={handleDeleteClick}>Delete</button>
                </div>
              )}
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