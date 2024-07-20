import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BASE_URL = 'https://api.themoviedb.org/3/movie'
const API_KEY = '827079ab8a1518766a8e70a7e079713d'

const Reviews = () => {
    const [reviews, setReviews] = useState()
    const { movieId } = useParams();
    
    useEffect(() => {
        fetch(`${BASE_URL}/${movieId}/reviews?page=1&api_key=${API_KEY}`)
        .then(data => data.json())
        .then(reviewsData => setReviews(reviewsData.results))
    })
    
    return (
        <ul>
            {reviews && reviews.map(({author, content}) => (
                <li>
                    <h3>{author}</h3>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}

export default Reviews