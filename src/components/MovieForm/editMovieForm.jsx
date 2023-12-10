import React, { useState } from 'react';
import MovieForm from './movieForm';
import Dialog from '../Dialog/dialog';
import { useRouter } from 'next/router';

const EditMovieForm = ({ onClose, selectedMovie }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = (movieData) => {
    const url = `http://localhost:4000/movies`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
      .then(response => {
        if (response.ok) {
          setSuccessMessage('Movie data has been updated successfully!');
          onClose();
          router.push('/');
        } else {
          throw new Error('Failed to update movie data.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => {
    router.push('/');
  }

  return (
    <>
      <Dialog title="Edit Movie" onClose={onClose || handleClose}>
        <MovieForm successMessage={successMessage} onSubmit={handleSubmit} initialMovieInfo={selectedMovie}/>
      </Dialog>
    </>
  );
};

export default EditMovieForm;