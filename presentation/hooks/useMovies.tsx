import { nowPLayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions copy";
import { topRatedAction } from "@/core/actions/movies/top-rated.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPLayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas tenes fresca la data
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas tenes fresca la data
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: topRatedAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas tenes fresca la data
  });


  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery
  };
};
