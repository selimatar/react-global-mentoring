export async function getAllMovieIds() {
  const res = await fetch('http://localhost:4000/movies');
  const moviesData = await res.json();

  const movieIds = moviesData.data.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  return movieIds;
}

export async function getMovieData(movieId) {
  const res = await fetch(`http://localhost:4000/movies/${movieId}`);
  const movieData = await res.json();

  return {
    movieId,
    ...movieData,
  };
}