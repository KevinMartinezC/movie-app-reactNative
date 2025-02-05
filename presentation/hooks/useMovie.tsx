import { getMovieCastAction } from "@/core/actions/movies/movie/get-credits-by-id.action";
import { getMovieByIdAction } from "@/core/actions/movies/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const credistQuery = useQuery({
    queryKey: ["credits", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
    credistQuery,
  };
};
