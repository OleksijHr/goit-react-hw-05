import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

const MovieList = ({ movies }) => {
  return (
    <div>
          {
              movies.map(movie => {
                  <Link
                      to={`movies/${movie.id}`}
                      state={{ form: location }}
                      key={movie.id}
                    >
                  <div>
                      <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
                      <h3>{ movie.title }</h3>
                      </div>
                      </Link>

                })
      }
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList
