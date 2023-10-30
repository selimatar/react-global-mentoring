import React, { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";
import SearchForm from '../Search/searchForm';
import Dialog from '../Dialog/dialog';
import GenreSelect from '../Genre/genreSelect';
import { genreList } from '../Genre/genreList';
import SortControl from '../SortControl/sortControl';
import MovieTile from '../MovieTile/movieTile';
import AddMovieForm from '../MovieForm/addMovieForm';
import EditMovieForm from '../MovieForm/editMovieForm';
import '../MovieForm/movie-form.css';
import './movie-list-page.css';

const MovieListPage = (props) => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [sortCriterion, setSortCriterion] = useState('release_date'); // sort criterion
    const [selectedMovie, setSelectedMovie] = useState({}); // selected movie
    const [movieId, setMovieId] = useState();
    const [showDetail, setShowDetail] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); //search query
    const [activeGenre, setActiveGenre] = useState('All'); //active genre
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]); //movie list

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({ sortCriterion, searchQuery, activeGenre });
    }, [sortCriterion, searchQuery, activeGenre]);

    useEffect(() => {
        if(movieId) navigate(`/${movieId}`);
    }, [movieId]);

    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      const newSortCriterion = params.get('sortCriterion') || 'release_date';
      const newSearchQuery = params.get('searchQuery') || searchQuery;
      const newActiveGenre = params.get('activeGenre') || 'All';
      setSortCriterion(newSortCriterion);
      setActiveGenre(newActiveGenre);
      setSearchQuery(newSearchQuery);
    }, [searchParams]);

    useEffect(() => {
        setIsLoading(true);
        fetchMovies();
    }, [searchParams]);

    const fetchMovies = () => {
        fetch(`http://localhost:4000/movies?${buildQuery()}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.data);
            setIsLoading(false);
        })
        .catch(error => console.error(error));
    }
      
    function buildQuery() {
        const queryParts = [];
        if (searchQuery && searchQuery !== '') {
            queryParts.push(`${'search'}=${searchQuery}&searchBy=title`);
        }
        if (sortCriterion) {
            queryParts.push(`${'sortBy'}=${sortCriterion}&sortOrder=desc`);
        }
        if (activeGenre !== 'All') {
            queryParts.push(`${'filter'}=${activeGenre}`);
        }
        return queryParts.join('&');
    }

    const handleSearchSubmit = (value) => {
        return event => {
            event.preventDefault();
            setSearchQuery(value);
        }
    };

    const handleTileClick = (movie) => {
        setShowDetail(true);
        setSelectedMovie(movie);
        setMovieId(movie.id);
    }

    const handleAddClick = () => {
        setShowAddDialog(true);
    }
    
    const handleEditClick = (movie) => {
        setEditingMovie(movie);
        setShowEditDialog(true);
    }

    const handleEditClose = () => {
        setShowEditDialog(false);
        setEditingMovie(null);
        fetchMovies();
    }
    
    const handleDeleteClick = () => {
        setShowDeleteDialog(true);
    }

    const handleSortByChange = (newSortBy) => {
        setSortCriterion(newSortBy);
    }

    return (
        <>
            <div className='add-movie-div'>
                <button className='add-movie-button' onClick={handleAddClick}>+ Add Movie</button>
                {showAddDialog &&
                    <AddMovieForm onClose={() => setShowAddDialog(false)}/>
                }
            </div>
            {movieId ? <Outlet /> : <SearchForm initialSearchQuery={searchQuery} onSearch={handleSearchSubmit} setSearchQuery={setSearchQuery}/> }
            <div className='movie-filtering'>
                <GenreSelect genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} selectGenre={props.selectGenre}/>
                <SortControl currentSelection={sortCriterion} onSelectionChange={handleSortByChange} />
            </div>
            <p style={{marginLeft: "40px"}}>{movies.length > 0 ? (movies.length + " movies found") : "No movies found"}</p>
            <div className='movie-list-container'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    movies.map((movie) => (
                        <MovieTile
                            key={movie.title}
                            movieInfo={movie}
                            onClick={() => handleTileClick(movie)}
                            onEdit={() => handleEditClick(movie)}
                            onDelete={() => handleDeleteClick(movie)}
                        />
                    ))
                )}
            </div>
            {showEditDialog && (
                <EditMovieForm selectedMovie={editingMovie} onClose={handleEditClose} />
            )}
            {showDeleteDialog && (
                <Dialog title="Delete Movie" onClose={() => setShowDeleteDialog(false)}>
                    <p>Movie has been deleted.</p>
                </Dialog>
            )}
        </>
    );

}

export default MovieListPage;