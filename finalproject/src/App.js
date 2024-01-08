import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/movie/Movie";

const url = "https://imdb-top-100-movies.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3dbcab0e68mshcb5b70071ab170ap173b7fjsnd5ac42d95bfc",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesData();
  }, []);
  const fetchMoviesData = async () => {
    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  };

  console.log(movies);

  return (
    <div className="App">
      <h1>List of Movies</h1>
      <div>
        {movies.map((movie, key) => (
          <Movie key={key} title={movie.title}/>
        ))}
      </div>
    </div>
  );
};

export default App;
