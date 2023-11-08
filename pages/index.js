import React from 'react';
import MovieListPage from '../src/components/MovieListPage/movieListPage';

const genreList = [
  { name: "All", id: 1 }, 
  { name: "Documentary", id: 2 }, 
  { name: "Comedy", id: 3 }, 
  { name: "Horror", id: 4 }
];

export async function getServerSideProps(context) {
  const contextQuery  = context.query;
  const sortCriterion = contextQuery.sortCriterion || 'release_date';
  const searchQuery = contextQuery.search || '';
  const activeGenre = contextQuery.filter || genreList[0];

  const query = searchQuery;
  const sortBy = sortCriterion;
  const genre = activeGenre;

  const res = await fetch(`http://localhost:4000/movies?${buildQuery(query, sortBy, genre)}`);
  const moviesData = await res.json();

  return {
    props: {
      sortBy: sortCriterion,
      query: searchQuery,
      genre: activeGenre,
      initialMovies: moviesData.data,
    },
  };
}

function buildQuery(query, sortBy, genre) {
  const queryParts = [];
  if (query && query !== '') {
    queryParts.push(`search=${query}&searchBy=title`);
  }
  if (sortBy) {
    queryParts.push(`sortBy=${sortBy}&sortOrder=desc`);
  }
  if (genre.name !== 'All') {
    queryParts.push(`filter=${genre.name}`);
  }
  return queryParts.join('&');
}

const Home = ({sortBy, query, genre, initialMovies}) => {
  return <MovieListPage sortBy={sortBy} query={query} genre={genre} initialMovies={initialMovies}/>;
};

export default Home;