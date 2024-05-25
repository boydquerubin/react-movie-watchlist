import React from "react";
import MovieCard from "./MovieCard.jsx";

function MovieScreen({
  addMovie,
  movieList,
  page,
  setPage,
  list,
  removeMovie,
}) {
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });

  const increment = () => setPage(page + 1);
  const decrement = () => setPage(Math.max(1, page - 1));

  return (
    <div className="page">
      <h2>Movie List</h2>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement} disabled={page === 1}>
          Previous
        </button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
