import React from 'react';
import MovieListPage from '../src/components/MovieListPage/movieListPage';
import { getMovieData, getAllMovieIds } from '../lib/movies';

export async function getStaticProps({ params }) {
  const movieData = await getMovieData(params.movieId);

  return {
    props: {
      movieData,
    },
  };
}

export async function getStaticPaths() {
  const movieIds = getAllMovieIds(); 

  const paths = movieIds.map((movieId) => ({
    params: { movieId: movieId.params.movieId },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function Movie({ movieData }) {
  return ( 
    <p>{movieData}</p>
  );
}