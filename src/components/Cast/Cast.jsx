import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BASE_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = '827079ab8a1518766a8e70a7e079713d'

const Cast = () => {
    const [cast, setCast] = useState()
    const { movieId } = useParams();
    
    useEffect(() => {
        fetch(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}`)
        .then(data => data.json())
        .then(castData => setCast(castData.cast))
    }, [])

    
    return (
        <ul>
            {cast && cast.map(({name, profile_path, character}) => (
                <li>
                    <h3>{name}</h3>
                    <img src={`https://image.tmdb.org/t/p/original/${profile_path}`} width='150px' alt="" />
                    <h4>Character: {character}</h4>
                </li>
            ))}
        </ul>
    )
}

export default Cast