import React, { useState } from 'react';


const MovieCard = ({ movie }) => {
  const [plot, setPlot] = useState('');

  const API_URL = 'https://www.omdbapi.com/?apikey=353b76c7';
  const getPlot = async (title) => {
    const response = await fetch(`${API_URL}&t=${movie.Title}&Plot=full`);
    const plotdata = await response.json();

    console.log(plotdata.Plot);
    setPlot(plotdata.Plot);
  }
  getPlot(movie.Title);

  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
        <p>{plot}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
  
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;