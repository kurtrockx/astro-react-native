import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../style/colors";
import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
import {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from "react-native-reanimated";

const firstLook = ({ style }) => {
  //ANIMATIONNNNNNNNNNNN
  const fromLeft = useSharedValue(-400);
  useEffect(() => {
    fromLeft.value = withDelay(
      300,
      withSpring(0, {
        damping: 100,
        stiffness: 200,
      })
    );
  }, []);
  const fromLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: fromLeft.value }],
    };
  });
  const fromRight = useSharedValue(400);
  useEffect(() => {
    fromRight.value = withDelay(
      300,
      withSpring(0, {
        damping: 100,
        stiffness: 200,
      })
    );
  }, []);
  const fromRightStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: fromRight.value }],
    };
  });

  const opacityBegone = useSharedValue(0);
  useEffect(() => {
    opacityBegone.value = withDelay(350, withTiming(1, { duration: 200 }));
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
    "LeagueSpartan-Medium": require("../../assets/fonts/LeagueSpartan-Medium.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <Animated.View style={[styles.container, style, opacityStyle]}>
      <Image
        source={require("../../assets/dashboardPics/firstAstronaut.png")}
        style={styles.firstAstronaut}
        resizeMode="contain"
      />
      <View style={styles.discover}>
        <View style={styles.discoverTextContainer}>
          <Text style={styles.discoText}>DISCOVER</Text>
        </View>
        <Animated.View style={[styles.card, fromLeftStyle]}>
          <Image
            source={require("../../assets/dashboardPics/introAstronomy-min.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.card, fromRightStyle]}>
          <Image
            source={require("../../assets/dashboardPics/introCelestial-min.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.card, fromLeftStyle]}>
          <Image
            source={require("../../assets/dashboardPics/introSpace-min.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
      <View style={styles.start}>
        <Text style={styles.startText}>START LEARNING</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    marginVertical: 0,
    width: 310,
    height: 500,
    overflow: "hidden",
  },
  firstAstronaut: {
    position: "relative",
    zIndex: 100000,
    margin: "auto",
    marginVertical: 4,
    width: 40,
    height: 40,
  },
  discover: {
    marginTop: 4,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    flexDirection: "column",
    gap: 8,
    paddingVertical: 16,
  },
  discoverTextContainer: {
    position: "absolute",
    width: 120,
    height: 30,
    left: "50%",
    transform: [{ translateX: -60 }],
    top: -14,
    backgroundColor: Colors.white,
  },
  discoText: {
    fontFamily: "LeagueSpartan-Medium",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 3,
    color: Colors.greyishBlue,
  },
  card: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    height: "96%",
  },
  start: {
    backgroundColor: Colors.blackishGrey,
    width: "90%",
    marginTop: 20,
    marginHorizontal: "auto",
    borderRadius: 16,
    paddingVertical: 12,
  },
  startText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 14,
    fontFamily: "LeagueSpartan-Bold",
  },
});

export default firstLook;
