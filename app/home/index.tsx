import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View style={style.activityIndicatorContainer}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={{...style.container, paddingTop: safeArea.top}}>
      <Text style={style.titleStyle}>Movies App</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []}/>
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []}/>
      <MovieHorizontalList title="Mejor calificadas" movies={topRatedQuery.data ?? []}/>
      <MovieHorizontalList title="Proximamene en cines" movies={upcomingQuery.data ?? []}/>
    </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 2,
    paddingBottom: 10
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 2,
  }
});

export default HomeScreen;
