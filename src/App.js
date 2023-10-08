import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter/counter";
import SearchForm from "./components/Search/searchForm";
import GenreSelect from "./components/Genre/genreSelect";
import { genreList } from "./components/Genre/genre-list";
import { movieList } from "./data/movies";
import MovieTile from "./components/MovieTile/movieTile";
import MovieDetails from "./components/MovieDetails/movieDetails";
import SortControl from "./components/SortControl/sortControl";
import Dialog from './components/Dialog/dialog';
import MovieForm from './components/MovieForm/movieForm';

const handleSearch = (query) => {
  alert('A film was submitted: ' + query);
}

const selectGenre = (index) => {
  const existedGenre = genreList.find((element) => element.id === index);
  return existedGenre;
}

const movies = [
  {
    imageUrl: movieList[0].poster_path,
    title: movieList[0].title,
    releaseYear: movieList[0].release_date,
    genres: movieList[0].genres,
    description: movieList[0].overview,
    duration: movieList[0].runtime,
    rating: movieList[0].vote_average
  },
  {
    imageUrl: movieList[3].poster_path,
    title: movieList[3].title,
    releaseYear: movieList[3].release_date,
    genres: movieList[3].genres,
    description: movieList[3].overview,
    duration: movieList[3].runtime,
    rating: movieList[3].vote_average
  },
];

function App() {
  const [sortBy, setSortBy] = useState('release-date');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleTileClick = (movie) => {
    setShowDetail(true);
    setSelectedMovie(movie);
  };

  const handleAddClick = () => {
    setShowAddDialog(true);
  };

  const handleEditClick = (movie) => {
    setEditingMovie(movie);
    setShowEditDialog(true);
  };

  const handleDeleteClick = (movie) => {
    setShowDeleteDialog(true);
  };

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Counter initialCount={0}/>
      <SearchForm initialSearchQuery="" onSearch={handleSearch} />
      <GenreSelect genreList={genreList} currentSelected="All" selectGenre={selectGenre}/>
      <SortControl currentSelection={sortBy} onSelectionChange={handleSortByChange} />
      <button className='add-movie-button' onClick={handleAddClick}>Add Movie</button>
      {showDetail && <MovieDetails movie={selectedMovie}/>}
      {movies.map((movie) => (
        <MovieTile
          key={movie.title}
          movieInfo={movie}
          onClick={() => handleTileClick(movie)}
          onEdit={() => handleEditClick(movie)}
          onDelete={() => handleDeleteClick(movie)}
        />
      ))}
      {showAddDialog && (
        <Dialog title="Add Movie" onClose={() => setShowAddDialog(false)}>
          <MovieForm />
        </Dialog>
      )}
      {showEditDialog && (
        <Dialog title="Edit Movie" onClose={() => setShowEditDialog(false)}>
          <MovieForm initialMovieInfo={editingMovie} />
        </Dialog>
      )}
      {showDeleteDialog && (
        <Dialog title="Delete Movie" onClose={() => setShowDeleteDialog(false)}>
          <p>Movie has been deleted.</p>
        </Dialog>
      )}
      {showDetail && <MovieDetails movie={selectedMovie}/>}
      <button style={{margin: "0px 0px 25px 40px"}} onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      {isDialogOpen && (
        <Dialog title="My Dialog" onClose={handleDialogClose}>
          <p style={{marginLeft: 90, marginBottom: 30}}>This is the content of my dialog.</p>
          <MovieForm initialMovieInfo={movies[0]} />
        </Dialog>
      )}
    </>
  );
}

export default App;
