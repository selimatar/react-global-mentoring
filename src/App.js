import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { genreList } from "./components/Genre/genreList";
import MovieListPage from './components/MovieListPage/movieListPage';
import MovieDetailsWrapper from './components/MovieDetails/movieDetailsWrapper';
import AddMovieForm from './components/MovieForm/addMovieForm';
import EditMovieForm from './components/MovieForm/editMovieForm';

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
          <Route path="/new" element={<AddMovieForm />} />
          <Route path=":movieId/edit" element={<EditMovieForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;