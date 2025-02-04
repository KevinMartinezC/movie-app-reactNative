import { View, useWindowDimensions, StyleSheet } from "react-native";

import Carousel from "react-native-reanimated-carousel";

import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;

  return (
    <View style={style.container}>
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} posterUrl={item.poster} />
        )}
        width={200}
        height={350}
        style={[{ width: width }, style.carouselStyle]}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
  },
  carouselStyle: {
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainSlideshow;
