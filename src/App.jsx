import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MovieContainer from "./MovieContainer";
import Search from "./Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("");

  const fetchData = () => {
    fetch(`https://www.omdbapi.com/?apikey=ef42345f&s=batman&type=series`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setCategory("batman");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <Hero />
        <Search setMovies={setMovies} setCategory={setCategory} />
        <MovieContainer category={category} movies={movies} />
      </main>
    </div>
  );
}

export default App;
