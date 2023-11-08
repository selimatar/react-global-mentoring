import React from 'react';
import './movie-form.css';
import { Formik, Field, Form } from 'formik';
import { object, string, array, date, number } from 'yup';

const MovieForm = ({ initialMovieInfo = {}, onSubmit, successMessage }) => {

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  const validationSchema = object({
    title: string().required('Title is required'),
    release_date: date().required('Release Year is required'),
    poster_path: string().required('Movie URL is required'),
    vote_average: number().positive('Number must be positive').required('Rating is required').default(0),
    overview: string().required('Overview is required'),
    genres: array()
    .min(1, 'Select at least one genre or add your own')
    .transform((value) => (Array.isArray(value) ? value : [value]))
  });

  return (
    <Formik
      initialValues={{
        poster_path: initialMovieInfo.poster_path ?? '',
        title: initialMovieInfo.title ?? '',
        tagline: (initialMovieInfo.tagline && initialMovieInfo.tagline !== '') ? initialMovieInfo.tagline : 'initial tagline',
        vote_count: initialMovieInfo.vote_count ?? 0,
        release_date: initialMovieInfo.release_date ?? '',
        overview: initialMovieInfo.overview ?? '',
        revenue: initialMovieInfo.revenue ?? 0,
        genres: initialMovieInfo.genres ?? [],
        runtime: initialMovieInfo.runtime ?? 0,
        vote_average: initialMovieInfo.vote_average ?? 0,
        ...(initialMovieInfo.id ? { id: initialMovieInfo.id } : {})
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          {successMessage && <div className="success-message">{successMessage}</div>}
          <div className="form-row">
            <div className="form-col">
              <label className="item-title" htmlFor="titleInput">Title</label>
              <Field
                type="text"
                id="titleInput"
                name="title"
                className="movie-title-input"
                placeholder="Enter title"
                required
              />
              {errors.title && touched.title ? (
                <div className='error-message'>{errors.title}</div>
              ) : null}
            </div>
            <div className="form-col">
              <label className="item-title" htmlFor="releaseDateInput">Release Date</label>
              <Field
                type="date"
                id="releaseDateInput"
                name="release_date"
                className="movie-release-date-input"
                required
              />
              {errors.date && touched.date ? (
                <div className='error-message'>{errors.date}</div>
              ) : null}
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="item-title" htmlFor="movieUrlInput">Movie URL</label>
              <Field
                type="url"
                id="movieUrlInput"
                name="poster_path"
                className="movie-url-input"
                placeholder="Enter movie URL"
                required
              />
              {errors.poster_path && touched.poster_path ? (
                <div className='error-message'>{errors.poster_path}</div>
              ) : null}
            </div>
            <div className="form-col">
              <label className="item-title" htmlFor="ratingInput">Rating</label>
              <Field
                type="number"
                id="ratingInput"
                name="vote_average"
                className="movie-rating-input"
                placeholder="Enter movie rating"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="item-title" htmlFor="genresInput">Genres</label>
              <Field
                type="text"
                id="genresInput"
                name="genres"
                className="movie-genres-input"
                placeholder="Enter genres (e.g., Action, Adventure)"
                onChange={(e) => {
                  const genreString = e.target.value;
                  const genreArray = genreString.split(',').map((genre) => genre.trim());
                  setFieldValue('genres', genreArray);
                }}
              />
              {errors.genres && touched.genres ? (
                <div className="error-message">{errors.genres}</div>
              ) : null}
            </div>

            <div className="form-col">
              <label className="item-title" htmlFor="runtimeInput">Runtime</label>
              <Field
                type="number"
                id="runtimeInput"
                name="runtime"
                className="movie-runtime-input"
                placeholder="Enter movie runtime"
                required
              />
            </div>
          </div>
          
          <label className="item-title" htmlFor="descriptionInput">Overview</label>
          <Field
            as="textarea"
            id="descriptionInput"
            name="overview"
            className="movie-overview-input"
            required
          />
          {errors.overview && touched.overview ? (
            <div className='error-message'>{errors.overview}</div>
          ) : null}
          
          <button className="submit-movie-btn" type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default MovieForm;