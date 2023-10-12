import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { genreList } from "./components/Genre/genreList";
import MovieListPage from './components/MovieListPage/movieListPage';
import MovieDetailsWrapper from './components/MovieDetails/movieDetailsWrapper';

const selectGenre = (index) => {
  const existedGenre = genreList.find((element) => element.id === index);
  return existedGenre;
}

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieListPage selectGenre={selectGenre}/>}>
          <Route path=":movieId" element={<MovieDetailsWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;