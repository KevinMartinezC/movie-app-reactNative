import { Actor } from "@/infrastructure/interfaces/movie.interface";
import React, { act } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  actor: Actor;
}

const AutorCard = ({ actor }: Props) => {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: actor.avatar }}
        resizeMode="cover"
        style={style.image}
      />
      <View>
        <Text numberOfLines={2} adjustsFontSizeToFit style={style.actorName}>
          {actor.name}
        </Text>
        <Text style={style.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingHorizontal: 4,
    width: 100,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 16,
  },
  actorName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  character: {
    color: "gray",
    fontSize: 14,
  },
});

export default AutorCard;
