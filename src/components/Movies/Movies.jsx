import { NavLink, Outlet, useSearchParams  } from "react-router-dom"
import { useEffect, useState } from "react"

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?'
const API_KEY = '827079ab8a1518766a8e70a7e079713d'

 const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    
    useEffect(() => {
        if (query) {
            console.log(query);
            searchMovies()
        }
    }, [])

    const searchMovies = () => {
        fetch(`${BASE_URL}query=${query}&include_adult=false&page=1&api_key=${API_KEY}`)
        .then(data => data.json())
        .then(moviesData => setSearchedMovies(moviesData.results))
    }


    return (
        <div>
            <input type="text" onChange={(e) => setSearchParams({query: e.target.value})} />
            <button onClick={searchMovies}>search</button>
            <ul>
                {searchedMovies && searchedMovies.map(({title, id}) => (
                    <li>
                        <NavLink to={`${id}`} state={{ from: `/movies${query ? `?query=${query}` : ''}` }}>{title}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

export default Movies