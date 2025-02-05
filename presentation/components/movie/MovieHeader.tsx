import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        start={[0, 0]}
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        style={{ ...style.gradientStyle, height: screenHight * 0.4 }}
      />
      <View style={style.iconStyle}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </Pressable>
      </View>
      <View style={{ ...style.container, height: screenHight * 0.7 }}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={{ uri: poster }}
            resizeMode="cover"
          />
        </View>
        <View style={style.titleContainer}>
          <Text style={style.originalTitle}>{originalTitle}</Text>
          <Text style={style.title}>{title}</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  imageContainer: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 5,
    marginTop: 5,
  },
  originalTitle: {
    fontWeight: "normal",
  },
  title: {
    fontWeight: "semibold",
    fontSize: 24,
  },
  iconStyle: {
    position: "absolute",
    zIndex: 99,
    elevation: 9,
    top: 40,
    left: 10,
  },
  gradientStyle: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
  },
});

export default MovieHeader;
