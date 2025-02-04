import {
  View,
  Text,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
    isLoading.current = false;
  };

  return (
    <View>
      {title && <Text style={style.textStyle}>{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterUrl={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: "medium",
    padding: 8,
  },
});

export default MovieHorizontalList;
