import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);

  async function fetchMovies(){
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    
    const fixedResults = data.results.map(movie=>{
      return{
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }
    }) 
    setMovies(fixedResults);
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
