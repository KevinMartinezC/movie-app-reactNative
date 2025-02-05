import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.reponse";
import { CastMapper } from "@/infrastructure/mappers/movieCredits.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
    
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
