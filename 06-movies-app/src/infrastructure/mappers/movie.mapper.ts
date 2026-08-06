import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-reponse";

// TODO: Implementacion de una clase que mapee los datos de la API de The Movie DB a nuestro modelo de Movie, se usa esta estructura para mantener el código organizado y separado por responsabilidades, en este caso la responsabilidad de mapear los datos de la API a nuestro modelo de Movie.
export class MovieMapper {
  static fromtheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };
}
