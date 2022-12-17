import React from "react";
import MovieItem from "./MovieItem";

export default function MovieContainer({ category, movies }) {
  return (
    <div className="movie-container">
      {movies?.length > 0 ? (
        <>
          <h2>{category}</h2>
          <div className="movie-inner-container">
            {movies.map((movie) => (
              <MovieItem
                key={movie.Title}
                title={movie.Title}
                poster={movie.Poster}
              />
            ))}
          </div>
        </>
      ) : (
        "no movies found"
      )}
    </div>
  );
}
