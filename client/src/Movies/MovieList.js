import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = props => {
  const saveMovie = props.addToSavedList;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} saveMovie={saveMovie} />
      ))}
    </div>
  );
};

const MovieDetails = ({ movie, saveMovie }) => {
  const saveIt = () => {
    const addToSavedList = saveMovie;
    addToSavedList(movie);
  };

  return <MovieCard movie={movie} saveMovie={saveIt} />;
};

export default MovieList;
