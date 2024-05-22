import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  // const [watchList, setWatchList] = useState([]);
  const [list, setList] = useState([]); // Define 'list' state
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
      const response = await axios.get(url);
      setMovieList(response.data.results);
      setList(response.data.results.slice(0, 5)); // Assuming 'list' is the first five movies
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data! {error.message}</p>;

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list} // Now passing the defined 'list'
        />
      </main>
    </div>
  );
}

export default App;
