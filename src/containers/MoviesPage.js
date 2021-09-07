// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import MovieShow component
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* Route component that renders MovieShow whenever movie is selected */}
    <Route 
    path={`${match.url}/:movieId`} 
    render={(routerProps) => <MovieShow {... routerProps} movies={movies} />}
    />
  </div>
);

export default MoviesPage;
