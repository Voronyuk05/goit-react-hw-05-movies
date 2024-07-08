import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import  Header  from "./Header/Header";
import  Movies  from "./Movies/Movies";
import  MovieDetails  from "./MovieDetails/MovieDetails";
import  Cast  from "./Cast/Cast";
import  Reviews  from "./Reviews/Reviews";


export const App = () => {
  
  return (
    <div>
     <Header/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/movies/:movieId" element={<MovieDetails />} >
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
       </Route>
       <Route path="*" element={<Home/>}/>
     </Routes>
    </div>
  );
};
