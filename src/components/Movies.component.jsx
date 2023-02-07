
import { movies } from "../data/movies";
import Movie from "./movies";
import "./movies.css"

const FetchMovies = ()=> {
    return movies
}

const MoviesComponents = () =>{

    const moviesData = FetchMovies();

    return(
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    // moviesData.map((movie) =>(
                    // <Movie movie={movie} />
                    
                    // )
                    moviesData.map((movie) => {
                            return  <Movie key={movie.id} movie={movie} />
                        }           
                    )
                }
            </ul>
        </div>
    )
}

export default MoviesComponents;
