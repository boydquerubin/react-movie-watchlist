import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // Function to add a movie to the watchlist
  const addMovie = (movie) => {
    setList((prevList) => [...prevList, movie]);
  };

  // Function to remove a movie from the watchlist
  const removeMovie = (movie) => {
    setList(list.filter((mov) => mov !== movie));
  };

  // Fetch movies from the API
  const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
    axios
      .get(url)
      .then((response) => {
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Effect to fetch data when 'page' changes
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
