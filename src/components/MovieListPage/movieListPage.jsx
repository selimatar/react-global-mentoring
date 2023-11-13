import React, { useState } from 'react';
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

const MovieListPage = ({sortBy, query, genre, initialMovies}) => {
    const router = useRouter();
    const { movieIdParam } = router.query;
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [editingMovie, setEditingMovie] = useState(null);
    const [movieId, setMovieId] = useState(movieIdParam);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [sortCriterion, setSortCriterion] = useState(sortBy);
    const [searchQuery, setSearchQuery] = useState(query);
    const [activeGenre, setActiveGenre] = useState(genreList.find(genreItem => genreItem.name === genre) ?? genreList[0]);

    const handleSearchSubmit = (value) => {
        return event => {
            event.preventDefault();
            setSearchQuery(value);
        }
    };

    const handleTileClick = (movie) => {
        const params = { sortCriterion: sortCriterion, searchQuery: searchQuery, activeGenre: activeGenre };
        setMovieId(movie.id);
        // navigate({
        //     pathname:`/${movie.id}`,
        //     search: `?${createSearchParams(params)}`,
        // });

        router.push(`/${movie.id}`)
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
            {movieId ? <MovieDetailsWrapper /> : <SearchForm initialQuery={searchQuery} onSearch={handleSearchSubmit} /> }
            <div className={movieListPageStyles.movieFiltering}>
                <GenreSelect genreList={genreList} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
                <SortControl currentSelection={sortCriterion} onSelectionChange={handleSortByChange} />
            </div>
            <p style={{ marginLeft: "40px" }}>
                {initialMovies && initialMovies.length > 0 ? initialMovies.length + " movies found" : "No movies found"}
            </p>
            <div className={movieListPageStyles.movieListContainer}>
                {
                    initialMovies?.map((movie) => (
                        <MovieTile
                            key={movie.title}
                            movieInfo={movie}
                            onClick={() => handleTileClick(movie)}
                            onEdit={() => handleEditClick(movie)}
                            onDelete={() => handleDeleteClick(movie)}
                        />
                    ))
                }
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