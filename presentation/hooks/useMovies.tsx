import { nowPLayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions copy";
import { topRatedAction } from "@/core/actions/movies/top-rated.actions";
import { upcomingAction } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPLayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24 horas tenes fresca la data
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "topRated"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
