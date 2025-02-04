import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-reponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const upcomingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/upcoming");

    return data.results.map(MovieMapper.fromTheMovieDBToMoview);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
