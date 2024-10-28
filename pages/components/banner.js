import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Banner = ({ source }) => {
  //ANIMATIONNNNNNNNNNNN
  const fromUp = useSharedValue(-400);
  useEffect(() => {
    fromUp.value = withSpring(0, {
      damping: 100,
      stiffness: 200,
    });
  }, []);
  const fromUpStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: fromUp.value }],
    };
  });

  const opacityBegone = useSharedValue(0);
  useEffect(() => {
    opacityBegone.value = withDelay(0, withTiming(1, { duration: 200 }));
  }, []);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityBegone.value,
    };
  });

  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-SemiBold": require("../../assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueGothic-Regular": require("../../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <Animated.View style={[styles.container, fromUpStyle]}>
      <Image
        source={source}
        style={styles.imageContainer}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 167,
    overflow: "hidden",
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  title: {
    margin: "auto",
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "LeagueGothic-Regular",
    color: "white",
  },
  titleLogo: {
    width: 24,
    height: 24,
  },
  welcome: {
    textAlign: "center",
    color: "white",
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 32,
  },
  welcomeDesc: {
    textAlign: "center",
    paddingHorizontal: 50,
    fontSize: 10,
    color: "white",
  },
});

export default Banner;
