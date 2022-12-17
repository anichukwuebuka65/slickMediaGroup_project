import React from "react";
import MovieItem from "./MovieItem";

export default function MovieContainer({ movies }) {
  console.log(movies);
  return (
    <div className="movie-container">
      <h2>Movie Category Name</h2>
      <div className="movie-inner-container">
        {movies?.length > 0
          ? movies.map((movie) => (
              <MovieItem
                key={movie.Title}
                title={movie.Title}
                poster={movie.Poster}
              />
            ))
          : "No movies found"}
      </div>
    </div>
  );
}
