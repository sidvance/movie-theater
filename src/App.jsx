import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
// import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import WatchList from './components/WatchList'

function App() {

  //movie list and watchlist arrays, page initialize at 1
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)



  const getMovieList = () => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => {
        console.log(res.data)
        setMovieList(res.data.results)
      }).catch(err => {console.log(err)})
  }

  useEffect(() => {
    getMovieList()
  }, [page])

  const addMovie = movie => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = movie => {
    let newState = watchList.filter((mov) => {
      return mov !== movie
    })
    setWatchList(newState)
  }


  return (
    <div className="App">
      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList 
        watchList={watchList}
        removeMovie={removeMovie}
        />
      </main> 
    </div>
  );
}

export default App;
