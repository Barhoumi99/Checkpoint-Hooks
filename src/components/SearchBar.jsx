import React, { useState } from "react";
const SearchBar = ({ movies, setFilteredMovies }) => {
    const [searchText, setSearchText] = useState('')
    const [ratingFilter, setRatingFilter] = useState(0)

    function filterMovies(searchText, ratingFilter) {
        let filteredMovies = movies.filter((movie) => {
            return (
                movie.title.toLowerCase().includes(searchText.toLowerCase()) && movie.rating >= ratingFilter
            )
        })
        setFilteredMovies(filteredMovies)
    }

    function handleSearchTextChange(e) {
        setSearchText(e.target.value)
        filterMovies(e.target.value, ratingFilter)
    }

    function handleRatingFilterChange(e) {
        setRatingFilter(e.target.value)
        filterMovies(searchText, e.target.value)
    }

    return (
        <div>
            <label htmlFor="searchText">Search by title: </label>
            <input 
                type='text'
                id='searchText'
                value={searchText}
                onChange={handleSearchTextChange}
            />

            <label htmlFor="ratingFilter">Filter by rating: </label>
            <input 
                type='number'
                id="ratingFilter"
                value={ratingFilter}
                onChange={handleRatingFilterChange}
            />
        </div>
    )
}
export default SearchBar