
const MovieCard = (props) => {
    const {movie, addMovie, removeMovie, watchList} = props;

    const inWatchList = watchList.filter((mov) => {
        return (mov.id === movie.id)
    })

    const button = inWatchList.length === 0 ? (
        <button onClick={() => {addMovie(movie)}} className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">Add To List</button>
    ) : (
        <button onClick={() => {removeMovie(movie)}} className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">Remove</button>
    )

    return (

        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie}></img>
            </div>
            {button}
        </div>
    )
}

export default MovieCard