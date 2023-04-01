// custom Hook Transform the Api Value
import responseMovies from '../mocks/results.json'


export function useMovies () {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
      
    }))
  
    return {mappedMovies: mappedMovies}
}

/*
Esto se hace con la finalidad de crear un intermediario entre
el Api y nuestra aplicacion, asi en cuyo caso algun valor de la A´pi cambie
podemos solo cambiarlo aqui y en todo nuestro proyecto 
estara igual. Porque hemos designado los valores desde aqui
*/