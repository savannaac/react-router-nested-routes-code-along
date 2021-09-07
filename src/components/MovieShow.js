import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

const MovieShow = ({ match, movies }) => {
    return (
        <div>
            <h3>{movies[match.params.movieId].title}</h3>
        </div>
    );
};
export default MovieShow;