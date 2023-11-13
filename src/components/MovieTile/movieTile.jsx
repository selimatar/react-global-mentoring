import React, { useState, useRef, useEffect } from 'react';
import styles from './movieTile.module.css';

const MovieTile = ({ movieInfo, onClick, onEdit, onDelete }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const dialogRef = useRef(null);

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
      <div className={styles.movieTile} title="movieTitle">
        <div className={styles.movieActionsContainer}>
        <div className={styles.movieTileActions}>
            <button className={styles.movieContextMenuButton} onClick={handleContextMenu} ref={dialogRef}>...</button>
            {showContextMenu && (
              <div className={styles.contextMenu} onBlur={handleContextMenuClose}>
                <button className={styles.contextMenuEditButton} onClick={handleEditClick}>Edit</button>
                <button className={styles.contextMenuDeleteButton} onClick={handleDeleteClick}>Delete</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.movieImageContainer}>
          <img className={styles.movieImage} 
            onClick={(event) => {
              event.preventDefault();
              onClick(movieInfo);
            }} 
            src={movieInfo.poster_path} 
            alt={movieInfo.title} 
          />
        </div>
        <div className={styles.movieTileDetails}>
          <div className={styles.movieNameAndYear}>
            <h2 className={styles.movieName}>{movieInfo.title}</h2>
            <p className={styles.movieYear}>{movieInfo.release_date.substring(0, 4)}</p>
          </div>
          <p className={styles.movieGenres}>{movieInfo.genres.join(', ')}</p>
        </div>
      </div>
    </>
  );
};

export default MovieTile;