import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Actor } from "@/infrastructure/interfaces/movie.interface";
import AutorCard from "./ActorCard";

interface Props {
  actors: Actor[];
}

const MovieCredits = ({ actors }: Props) => {
  return (
    <View>
      <Text style={style.textStyle}>Actores</Text>
      <FlatList
        horizontal
        data={actors}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <AutorCard actor={item} />}
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

export default MovieCredits;
