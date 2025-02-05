import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Formatter } from "@/helpers/formatter";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.ratingContainer}>
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(",")}</Text>
      </View>
      <Text style={style.historyTitle}>Historia</Text>
      <Text style={style.description}>{movie.description}</Text>
      <Text style={style.budget}>{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  historyTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 2,
  },
  description: {
    fontWeight: "normal",
    marginVertical: 2,
    color: "gray",
  },
  budget: {
    fontWeight: "bold",
    marginTop: 2,
    fontSize: 20,
  },
});

export default MovieDescription;
