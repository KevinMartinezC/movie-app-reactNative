import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-reponse";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

interface Options {
  page?: number;
}

export const topRatedAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/top_rated", {
      params: {
        page: page,
      },
    });

    return data.results.map(MovieMapper.fromTheMovieDBToMoview);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
