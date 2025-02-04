import { nowPLayingAction } from "@/core/actions/movies/now-playing.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPLayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas tenes fresca la data 
  });

  return {
    nowPlayingQuery,
  };
};
