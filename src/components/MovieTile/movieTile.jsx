import React, { useState } from 'react';
import './movieTile.css'

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

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
        <h2 style={{margin: 40}}>Movie Tile Component</h2>
        <div className="movie-tile" title="movieTitle">
          <div className="movie-image-container">
            <img className="movie-image" onClick={onClick} src={movieInfo.imageUrl} alt={movieInfo.title} />
            <div className="movie-tile-actions">
              <button className="movie-tile-context-menu-button" onClick={handleContextMenu}>...</button>
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
              <p className="movie-year">{movieInfo.releaseYear.substring(0, 4)}</p>
            </div>
            <p className="movie-genres">{movieInfo.genres.join(', ')}</p>
          </div>
        </div>
      </>
  );
};

export default MovieTile;