import React from "react";

export default function MovieItem({ title, poster }) {
  return (
    <div className="movie-item">
      <p>{title}</p>
      <img src={poster} alt={title} />
    </div>
  );
}
