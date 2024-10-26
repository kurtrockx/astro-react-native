import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Banner = ({ style, style2 }) => {
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
        source={require("../../assets/dashboardPics/banner.png")}
        style={styles.imageContainer}
        resizeMode="contain"
      />
      <View style={styles.title}>
        <Text style={styles.textTitle}>ASTRO</Text>
        <Image
          source={require("../../assets/images/sitAstro2.png")}
          style={styles.titleLogo}
        />
      </View>

      <Text style={styles.welcome}>Welcome to Astro!</Text>
      <Text style={styles.welcomeDesc}>
        Get ready to explore the incredible world of astronomy, where the
        universe opens its doors to endless discoveries!
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 178,
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
