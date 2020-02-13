import React from "react";
import { Link } from "react-router-dom";

const SavedList = ({ list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map(movie => (
      <Link to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <Link to="/">
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
