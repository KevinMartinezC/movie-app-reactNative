import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-reponse";

export const nowPLayingAction = async () => {
  try {
    const {data} = await movieApi.get<MovieDBResponse>('/now_playing')
    console.log(data);
    return [];
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
