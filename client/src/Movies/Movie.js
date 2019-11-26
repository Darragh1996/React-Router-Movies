import React from "react";
import MovieCard from "./MovieCard";

const Movie = props => {
  const movie = props.location.state.movie;

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button" onClick={() => props.add(movie)}>
        Save
      </div>
    </div>
  );
};

export default Movie;
