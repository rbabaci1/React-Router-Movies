import React from "react";
import { NavLink, Link } from "react-router-dom";

const navStyle = {
  fontWeight: "bold",
  background: "#f5e5d0",
  padding: "4px 0",
  fontFamily: "Monaco",
  color: "#0d9980",
  margin: "0 15px 10px 0"
};

const SavedList = ({ list }) => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink style={navStyle} to={`/movies/${movie.id}`} key={movie.id}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <Link to="/" className="home-link">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
