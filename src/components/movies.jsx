


const Movie = ({movie}) => {

    return(
        <li key={movie.id} className="movie">
            <img src={movie.posterUrl} alt={movie.title}/>
            <p> {movie.title} by Derectoer:{movie.director} was released on :{movie.year}</p>
        </li>
    )
}


export default Movie;