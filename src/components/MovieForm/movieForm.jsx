import React, { useState } from 'react';
import './movie-form.css';

const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {

  const [movieInfo, setMovieInfo] = useState(initialMovieInfo || {
    imageUrl: '',
    title: '',
    releaseYear: '',
    genres: [],
    description: '',
    duration: '',
    rating: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieInfo((prevMovieInfo) => ({
      ...prevMovieInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(movieInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-col">
          <label className="item-title" htmlFor="titleInput">Title</label><br/>
          <input
            type="text"
            id="titleInput"
            name="titleInput"
            className="movie-title-input"
            placeholder={movieInfo.title || ''}
            value={movieInfo.title || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
        <div className="form-col">
          <label className="item-title" htmlFor="releaseDateInput">Release Date</label>
          <input
            type="date"
            id="releaseDateInput"
            name="releaseDateInput"
            className="movie-release-date-input"
            value={movieInfo.releaseDate || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label className="item-title" htmlFor="movieUrlInput">Movie URL</label>
          <input
            type="url"
            id="movieUrlInput"
            name="movieUrlInput"
            className="movie-url-input"
            placeholder={movieInfo.imageUrl || ''}
            value={movieInfo.imageUrl || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
        <div className="form-col">
          <label className="item-title" htmlFor="ratingInput">Rating</label>
          <input
            type="text"
            id="ratingInput"
            name="ratingInput"
            className="movie-rating-input"
            placeholder={movieInfo.rating || ''}
            value={movieInfo.rating || ''}
            onChange={handleInputChange}
            required
          /><br/>
        </div>
      </div>
      
      <label className="item-title" htmlFor="descriptionInput">Overwiew</label><br/>
      <textarea
        id="descriptionInput"
        name="descriptionInput"
        className="movie-overview-input"
        value={movieInfo.description || ''}
        onChange={handleInputChange}
        required
      ></textarea><br/>
      
      <button className="submit-movie-btn" type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;