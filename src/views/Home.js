import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { Movie } from "../components/Movie";

export const Home = () => {

const [movies, setMovies] = useState([]);

const getMovies = async ()=>{
    const {
        data: { results },
    } = await MoviesService.getMovies();

    setMovies(results);

    //console.log(data);
}

useEffect(()=>{
    getMovies();
}, []);

return (
    <div className="container">
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.id} className="col-3">
                <Movie movie={movie}/>
            </div>
            ))}
        </div>
    </div>
)
}