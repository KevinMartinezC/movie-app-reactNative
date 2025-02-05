import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDetailDBResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDetailDBResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToComleteMoview(data)
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
