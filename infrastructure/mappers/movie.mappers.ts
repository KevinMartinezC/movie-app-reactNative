import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-reponse";

export class MovieMapper {
  static fromTheMovieDBToMoview = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date).toISOString().split("T")[0],
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };
}
