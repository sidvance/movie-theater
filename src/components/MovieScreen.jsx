
import MovieCard from "./MovieCard"

const MovieScreen = (props) => {
    const { watchList, page, setPage, movieList, addMovie, removeMovie } = props

    const movieDisplay = movieList.map((movie, index) => {
        console.log(movieList)
        return (
            <MovieCard 
                movie={movie}
                addMovie={addMovie}
                removeMovie={removeMovie}
                watchList={watchList}
            />
        )
    })

    const decrement = () => {
            setPage(page - 1)
    }

    const increment = () => {
        setPage(page + 1)
    }

    return(
        <div className='page'>
            <h1>Cassidy's Movie Theater</h1>
            <h3>Add a movie to your watch list</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement} className="rounded-full bg-pink">Previous</button>
                <button onClick={increment} className="rounded-full bg-purple">Next</button>
            </div>
            <div className='movie-container'>
                {movieDisplay}
            </div>
        </div>
    )
}


export default MovieScreen