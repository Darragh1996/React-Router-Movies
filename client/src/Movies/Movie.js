import React from "react";
import MovieCard from './MovieCard'; 

const Movie = props => {
  const movie = props.location.state.movie;

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
     <MovieCard  title={title} director={director} metascore={metascore} stars={stars}/>
      <div className="save-button" onClick={() => props.add(movie)}>Save</div>
    </div>
  );
};

export default Movie;
