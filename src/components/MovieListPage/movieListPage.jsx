import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchForm from '../Search/searchForm';
import Dialog from '../Dialog/dialog';
import GenreSelect from '../Genre/genreSelect';
import SortControl from '../SortControl/sortControl';
import MovieTile from '../MovieTile/movieTile';
import AddMovieForm from '../MovieForm/addMovieForm';
import EditMovieForm from '../MovieForm/editMovieForm';
import MovieDetailsWrapper from '../MovieDetails/movieDetailsWrapper';
import '../MovieForm/movie-form.module.css';
import movieListPageStyles from './movie-list-page.module.css';

const genreList = [
    { name: "All", id: 1 }, 
    { name: "Documentary", id: 2 }, 
    { name: "Comedy", id: 3 }, 
    { name: "Horror", id: 4 }
];

const MovieListPage = ({sortBy, query, genre, initialMovies, selectedMovieId}) => {
    const router = useRouter();
    const { movieIdParam } = router.query;
    const [movieList, setMovieList] = useState(initialMovies);
    const [isLoading, setIsLoading] = useState(false);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [movieId, setMovieId] = useState(movieIdParam ?? selectedMovieId);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [sortCriterion, setSortCriterion] = useState(sortBy);
    const [searchQuery, setSearchQuery] = useState(query);
    const [activeGenre, setActiveGenre] = useState(genreList.find(genreItem => genreItem.name === genre) ?? genreList[0]);

    const setSearchParams = (params) => {
        router.push({
          pathname: '/',
          query: params,
        });
    };

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

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`http://localhost:4000/movies?${buildQuery(searchQuery, sortCriterion, activeGenre)}`);
          const moviesData = await res.json();
          setMovieList(moviesData.data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
    };

    useEffect(() => {
        setSearchParams({ sortCriterion, searchQuery, activeGenre: activeGenre.name });
    }, [sortCriterion, searchQuery, activeGenre, movieId]);
    
    useEffect(() => {
        fetchMovies();
    }, [sortCriterion, searchQuery, activeGenre, router.query]);

    const handleSearchSubmit = (value) => {
        return event => {
            event.preventDefault();
            setSearchQuery(value);
        }
    };

    const handleTileClick = (movie) => {
        const params = { sortCriterion: sortCriterion, searchQuery: searchQuery, activeGenre: activeGenre.name };
        setMovieId(movie.id);
        router.push({
            pathname: `/${movie.id}`,
            query: params,
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
            <div className={movieListPageStyles.addMovieDiv}>
                <button className={movieListPageStyles.addMovieButton} onClick={handleAddClick}>+ Add Movie</button>
                {showAddDialog &&
                    <AddMovieForm onClose={() => setShowAddDialog(false)}/>
                }
            </div>
            {movieId ? <MovieDetailsWrapper movieId={movieId} /> : <SearchForm initialQuery={searchQuery} onSearch={handleSearchSubmit} /> }
            <div className={movieListPageStyles.movieFiltering}>
                <GenreSelect genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
                <SortControl currentSelection={sortCriterion} onSelectionChange={handleSortByChange} />
            </div>
            <p style={{ marginLeft: "40px" }}>
                {movieList && movieList.length > 0 ? movieList.length + " movies found" : "No movies found"}
            </p>
            <div className={movieListPageStyles.movieListContainer}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    movieList.map((movie) => (
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