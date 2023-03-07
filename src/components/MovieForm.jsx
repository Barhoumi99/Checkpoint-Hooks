import React, { useState } from "react";

const MovieForm = ({onAddMovie}) => {
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [year, setYear] = useState("")
    const [rating, setRating] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const movie = {
            id: Date.now(),
            title,
            poster,
            year: Number(year),
            rating: Number(rating)
        }
        onAddMovie(movie);
        setTitle("")
        setPoster('')
        setRating('')
        setYear('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add New Movie</h2>
            <label htmlFor="title">Title: </label>
            <input 
                type="text"
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="poster">Poster URL: </label>
            <input
                type="text"
                id="poster"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
            />
            <label htmlFor="year">Release Year: </label>
            <input
                type='number'
                id='year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor="rating" >IMDB Rating: </label>
            <input 
                type='number'
                id="rating"
                value={rating}
                step="0.1"
                onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Add Movie</button>
        </form>
    )
}
export default MovieForm