import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=827079ab8a1518766a8e70a7e079713d'

 const Home = () => {
    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch(BASE_URL)
        .then(data => data.json())
        .then(moviesData => setMovies(moviesData.results))
    }, [])

    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movies && movies.map(({id, title, name}) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: "/" }}>{title ? title : name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home