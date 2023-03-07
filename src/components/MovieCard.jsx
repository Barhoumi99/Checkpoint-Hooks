import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} width={"200px"}/>
            <h2>{movie.title}</h2> <span>({movie.year})</span>
            <h6>IMDB rating: {movie.rating} /10</h6>
        </div>
    )
}
export default MovieCard