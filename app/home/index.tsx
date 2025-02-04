import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View style={style.activityIndicatorContainer}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View style={{...style.container, paddingTop: safeArea.top}}>
      <Text style={style.titleStyle}>Movies App</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []}/>
    </View>
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
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 2
  }
});

export default HomeScreen;
