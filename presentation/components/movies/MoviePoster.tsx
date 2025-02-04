import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

interface Props {
  id: number;
  posterUrl: string;
  smallPoster?: boolean;
}
const MoviePoster = ({ posterUrl, id, smallPoster = false }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        style.container,
      ]}
    >
      <Image
        source={{ uri: posterUrl }}
        style={[
          style.image,
          {
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
          },
        ]}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  container: {
    paddingHorizontal: 2,
  },
});
export default MoviePoster;
