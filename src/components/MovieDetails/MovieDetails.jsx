import { NavLink, Link, Outlet, useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from './MovieDetails.module.css'

const BASE_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = '827079ab8a1518766a8e70a7e079713d'

 const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const location = useLocation()
    const { movieId } = useParams();

    useEffect(() => {
        fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(movieData => setMovie(movieData))
    }, [])



    return (
        <div className={styles.details}>
            <Link to={location.state.from} className={styles.backLink}>Go Back</Link>
            {movie && 
            <div className={styles.card}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} width='400px' alt="" />
                <h2>{movie.title ? movie.title : movie.name}</h2>
                    <h3>User score: {(Math.round(movie.vote_average*10))}%</h3>
                <div>
                    <h3>Overwiev</h3>
                    <p>{movie.overview}</p>
                </div>
                <div>
                    <h3>Genres</h3>
                    {movie.genres.map(({name}) => (
                        <p>{name}</p>
                    ))}
                </div>
            </div>}
            <NavLink to='cast' state={{ from: location.state.from }}>Cast</NavLink>
            <NavLink to='reviews' state={{ from: location.state.from }}>Reviews</NavLink>

            <Outlet />
        </div>
    )
}

export default MovieDetails