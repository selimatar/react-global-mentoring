import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate, createSearchParams } from "react-router-dom";
import SearchForm from '../Search/searchForm';
import Dialog from '../Dialog/dialog';
import GenreSelect from '../Genre/genreSelect';
import SortControl from '../SortControl/sortControl';
import MovieTile from '../MovieTile/movieTile';
import AddMovieForm from '../MovieForm/addMovieForm';
import EditMovieForm from '../MovieForm/editMovieForm';
import MovieDetailsWrapper from '../MovieDetails/movieDetailsWrapper';
import '../MovieForm/movie-form.css';
import './movie-list-page.css';

const genreList = [
    { name: "All", id: 1 }, 
    { name: "Documentary", id: 2 }, 
    { name: "Comedy", id: 3 }, 
    { name: "Horror", id: 4 }
];

const MovieListPage = () => {
    const { movieId: movieIdParam } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortCriterion') || 'release_date');
    const [movieId, setMovieId] = useState(movieIdParam);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('searchQuery') || '');
    const [activeGenre, setActiveGenre] = useState(genreList.find(genre => genre.name === searchParams.get('activeGenre')) ?? genreList[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setSearchParams({ sortCriterion, searchQuery, activeGenre: activeGenre.name });
    }, [sortCriterion, searchQuery, activeGenre]);

    useEffect(() => {
        setIsLoading(true);
        fetchMovies();
    }, [searchParams]);

    const fetchMovies = () => {
        fetch(`http://localhost:4000/movies?${buildQuery()}`)
        .then(response => response.json())
        .then(res => {
            setMovies(res.data);
            setIsLoading(false);
        })
        .catch(error => console.error(error));
    }, [searchParams, movieId]);
      
    function buildQuery() {
        const queryParts = [];
        if (searchQuery && searchQuery !== '') {
            queryParts.push(`${'search'}=${searchQuery}&searchBy=title`);
        }
        if (sortCriterion) {
            queryParts.push(`${'sortBy'}=${sortCriterion}&sortOrder=desc`);
        }
        if (activeGenre.name !== 'All') {
            queryParts.push(`${'filter'}=${activeGenre.name}`);
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
        const params = { sortCriterion: sortCriterion, searchQuery: searchQuery, activeGenre: activeGenre };
        setMovieId(movie.id);
        navigate({
            pathname:`/${movie.id}`,
            search: `?${createSearchParams(params)}`,
        });
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
            {movieId ? <MovieDetailsWrapper /> : <SearchForm initialQuery={searchQuery} onSearch={handleSearchSubmit} /> }
            <div className='movie-filtering'>
                <GenreSelect genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
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