import React from 'react';
import { genreList } from "./components/Genre/genreList";
import MovieListPage from './components/MovieListPage/movieListPage';
import './App.css';

const selectGenre = (index) => {
  const existedGenre = genreList.find((element) => element.id === index);
  return existedGenre;
}

function App() {
  return <MovieListPage selectGenre={selectGenre}/>;
}

export default App;