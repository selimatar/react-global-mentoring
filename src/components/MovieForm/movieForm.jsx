import React from 'react';
import './movie-form.css';
import { Formik, Field, Form } from 'formik';
import { object, string, date, number } from 'yup';

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
    runtime: number().positive('Rating must be positive').default(0)
  });

  return (
    <Formik
      initialValues={initialMovieInfo || {
        poster_path: '',
        title: '',
        release_date: '',
        genres: [],
        overview: '',
        runtime: '',
        vote_average: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
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
              type="text"
              id="ratingInput"
              name="vote_average"
              className="movie-rating-input"
              placeholder="Enter movie rating"
              required
            />
            {errors.vote_average && touched.vote_average ? (
              <div className='error-message'>{errors.vote_average}</div>
            ) : null}
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