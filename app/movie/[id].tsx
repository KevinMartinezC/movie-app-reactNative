import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCredits from "@/presentation/components/movie/MovieCredits";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, credistQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View style={style.activityIndicatorContainer}>
        <Text style={style.textStyle}>Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView style={{marginBottom: 30}}> 
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCredits actors={credistQuery.data ?? []}/>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    marginBottom: 4,
  },
});
export default MovieScreen;
