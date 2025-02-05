import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDetailDBResponse } from "../interfaces/moviedb-detail.response";
import { Result } from "../interfaces/moviedb-reponse";

export class MovieMapper {
  private static getBaseMovieData(movie: Result | MovieDetailDBResponse) {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date).toISOString().split("T")[0],
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  }

  static fromTheMovieDBToMoview = (movie: Result): Movie => {
    return {
      ...MovieMapper.getBaseMovieData(movie),
    };
  };

  static fromTheMovieDBToComleteMoview = (
    movie: MovieDetailDBResponse
  ): CompleteMovie => {
    return {
      ...MovieMapper.getBaseMovieData(movie),
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((g) => g.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}
