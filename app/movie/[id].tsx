import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { getMovieByIdAction } from "@/core/actions/movies/movie/get-movie-by-id.action";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie Screen</Text>
    </View>
  );
};

export default MovieScreen;
