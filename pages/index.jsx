import React, { useEffect } from 'react';
import MovieListPage from '../src/components/MovieListPage/movieListPage';
import { useRouter } from 'next/router';

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

  const res = await fetch(`http://localhost:4000/movies?${buildQuery(searchQuery, sortCriterion, activeGenre)}`);
  const moviesData = await res.json();

  return {
    props: {
      sortCriterion,
      searchQuery,
      activeGenre,
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

const Home = ({sortCriterion, searchQuery, activeGenre, initialMovies}) => {
  const router = useRouter();

  useEffect(() => {
    const query = buildQuery(searchQuery, sortCriterion, activeGenre);
    
    const queryParams = {
      searchQuery: '',
      sortCriterion: 'release_date',
      activeGenre: 'All',
    };
    router.replace({
      pathname: '/',
      query: query ? { ...queryParams } : {},
    });
  }, []);

  return <MovieListPage sortBy={sortCriterion} query={searchQuery} genre={activeGenre} initialMovies={initialMovies}/>;
};

export default Home;