import React, { useEffect, useState } from "react";
import MovieDetails from "./movieDetails";

function MovieDetailsWrapper({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
        await fetch(`http://localhost:4000/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
          setMovie(data);
        })
        .catch(error => console.error(error));
    };
    fetchMovie();
  }, [movieId]);

  return movie ? <MovieDetails movie={movie} /> : <div>Loading...</div>;
}

export default MovieDetailsWrapper;