import { useEffect, useState } from "react"
import { fetchMovies } from "../../movieApi"
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies();
        setMovies(data)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData();
}, [])

  return (
    <div>
      <h1>Movies Page</h1>
        {movies.length > 0 && <MovieList movies={ movies }  /> }
    </div>
  )
}

export default MoviesPage
