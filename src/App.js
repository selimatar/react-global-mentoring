import React from "react";
import './App.css';
import Counter from "./components/Counter/Counter";
import SearchForm from "./components/Search/SearchForm";
import GenreSelect from "./components/Genre/GenreSelect";
import { genreList } from "./components/Genre/genre-list";

const handleSearch = (query) => {
  alert('A film was submitted: ' + query);
}

const selectGenre = (index) => {
  const existedGenre = genreList.find((element) => element.id === index);
  return existedGenre;
}

function App() {
  return (
    <>
      <Counter initialCount={0}/>
      <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      <GenreSelect genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
    </>
  );
}

export default App;
