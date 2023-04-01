function ListOfMovies ({movies}) {
    return (
        <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.Title}/>
            </li>
          ))
        }
      </ul>
    )
}


function NoMovieResults () {
    return (
        <p>No se encontraron Peliculas para esta busqueda</p>
    )
}


export function Movies ({movies}) {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ? <ListOfMovies movies={movies}/>
        : <NoMovieResults/>
    )
}