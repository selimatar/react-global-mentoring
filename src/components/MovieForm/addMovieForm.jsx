import React, { useState } from 'react';
import MovieForm from './movieForm';
import Dialog from '../Dialog/dialog';
import { useRouter } from 'next/router';

const AddMovieForm = ({onClose}) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = (movieData) => {
    fetch(`http://localhost:4000/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
    .then((response) => {
      if (response.ok) {
        setSuccessMessage('Movie has been added successfully!');
        onClose();
        const { query } = router;
        router.push({
          pathname: router.pathname,
          query,
        });
      } else {
        console.log('Error adding movie');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleClose = () => {
    router.push('/');
  }

  return (
    <>
      <Dialog title="Add Movie" onClose={onClose || handleClose}>
        <MovieForm successMessage={successMessage} onSubmit={handleSubmit}/>
      </Dialog>
    </>
  );
};

export default AddMovieForm;