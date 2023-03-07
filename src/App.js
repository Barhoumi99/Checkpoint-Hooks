import './App.css';
import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './InitialMovieCollection.js'
import initialMovieCollection from './InitialMovieCollection.js';
function App() {
  const [movies, setMovies] = useState(initialMovieCollection)
  const [filteredMovies, setFilteredMovies] = useState(movies)

  function addMovie(newMovie) {
    setMovies((movies) => [...movies, newMovie])
  }
  return (
    <div>
      <SearchBar
        movies={movies} 
        setFilteredMovies={setFilteredMovies} 
      />
      <MovieList movies={filteredMovies} />
      <aside>
        <MovieForm onAddMovie={addMovie}/>
      </aside>
    </div>
  );
}

export default App;
