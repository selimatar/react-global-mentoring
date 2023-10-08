import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import MovieForm from '../movieForm';

describe('MovieForm', () => {
  const onSubmitMock = jest.fn();

  it('should submit the form with new movie data when addMovie is called', () => {
    const { getByLabelText, getByText } = render(<MovieForm onSubmit={onSubmitMock} />);

    // Fill in the form inputs with movie data
    fireEvent.change(getByLabelText('Title'), { target: { value: 'New Movie' } });
    fireEvent.change(getByLabelText('Release Date'), { target: { value: '2023-05-13' } });
    fireEvent.change(getByLabelText('Movie URL'), { target: { value: 'https://example.com/movie.png' } });
    fireEvent.change(getByLabelText('Rating'), { target: { value: 'PG-13' } });
    fireEvent.change(getByLabelText('Overwiew'), { target: { value: 'This is a new movie' } });

    // Submit the form
    fireEvent.click(getByText('Submit'));

    // Check that onSubmit was called with the expected movie data
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({
      titleInput: 'New Movie',
      releaseDateInput: '2023-05-13',
      movieUrlInput: 'https://example.com/movie.png',
      ratingInput: 'PG-13',
      descriptionInput: 'This is a new movie'
    });
  });

  it('should submit the form with updated movie data when editMovie is called', () => {
    const { getByLabelText, getByText } = render(
      <MovieForm
        initialMovieInfo={{
          title: 'Existing Movie',
          releaseDate: '2023-05-15',
          imageUrl: 'https://example.com/movie',
          rating: '4.5',
          description: 'This is an existing movie.',
          genres: [],
          duration: ''
        }}
        onSubmit={onSubmitMock}
      />
    );
  
    fireEvent.change(getByLabelText('Title'), { target: { name: 'title', value: 'Updated Movie' } });
    fireEvent.click(getByText('Submit'));
  
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({
      title: 'Updated Movie', // Make sure 'title' is used as the name here
      releaseDate: '2023-05-15',
      imageUrl: 'https://example.com/movie',
      rating: '4.5',
      description: 'This is an existing movie.',
      genres: [],
      duration: ''
    });
  });

  // it('should submit the form with empty movie data when deleteMovie is called', () => {
  //   const onSubmitMock = jest.fn();
  //   //will be filled
  // });
});