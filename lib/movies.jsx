export async function getAllMovieIds() {
  const res = await fetch('http://localhost:4000/movies');
  const moviesData = await res.json();
  console.log('>>>>>moviesData', moviesData.data)
  const movieIds = moviesData.data.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  console.log('>>>>>movieIds:', movieIds); // Add this line for debugging

  return movieIds ?? [];
}

export async function getMovieData(movieId) {
  // Adjust the API endpoint as needed
  const res = await fetch(`http://localhost:4000/movies/${movieId}`);
  const movieData = await res.json();

  // Combine the data with the id
  return {
    movieId,
    ...movieData,
  };
}