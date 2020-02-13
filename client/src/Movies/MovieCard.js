import React from "react";
import { Link } from "react-router-dom";
import saveAtHere from "./SaveAtHere";

const MovieCard = ({ movie, addToSavedList }) => {
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      </Link>
      <div
        className="save-button"
        onClick={() => saveAtHere(addToSavedList, movie)}
      >
        Save
      </div>
    </div>
  );
};

export default MovieCard;
