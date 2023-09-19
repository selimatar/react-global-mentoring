import React from "react";
import "./movieDetails.css";

const MovieDetails = (props) => {
  const lastIndex = props.movie.genres.length - 1;
  const genres = props.movie.genres.slice(0, lastIndex).join(", ") + (lastIndex > 0 ? " & " : "") + props.movie.genres[lastIndex];
  return (
    <>
      <div style={{ margin: 40 }}>
        <h2>Movie Details Component</h2>
        <div className="movie-details" title="movie-details">
          <div className="movie-image">
            <img style={{height: "400px"}} alt={props.movie.movieName} src={props.movie.imageUrl} />
          </div>
          <div className="movie-information">
            <div className="movie-header">
              <p className="movie-title">{props.movie.movieName}</p>
              <span className="movie-avarage">{props.movie.rating}</span>
            </div>
            <span className="movie-genres">{genres}</span>
            <p className="movie-release">{props.movie.releaseYear}</p>
            <p className="movie-duration">{props.movie.duration}</p>
            <p className="movie-description">{props.movie.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
