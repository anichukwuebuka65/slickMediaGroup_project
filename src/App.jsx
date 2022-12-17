import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import MovieContainer from "./MovieContainer";
import Search from "./Search";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <Hero />
        <Search setMovies={setMovies} />
        <MovieContainer movies={movies} />
      </main>
    </div>
  );
}

export default App;
