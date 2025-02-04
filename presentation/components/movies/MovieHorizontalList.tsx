import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
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
      />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'medium',
    padding: 8,
  },
});

export default MovieHorizontalList;
