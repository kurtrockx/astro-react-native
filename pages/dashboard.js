import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useState, useEffect } from "react";
import Banner from "./components/banner";
import LoginRight from "./components/loginToTheRight";
import FirstLook from "./components/firstLook";
import SecondLook from "./components/secondLook";
import ThirdLook from "./components/thirdLook";

const Enter = ({ setCurrentPage }) => {
  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-SemiBold": require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueGothic-Regular": require("../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LoginRight style={styles.loginRight} />
      <Banner />
      <FirstLook style={styles.firstLook} />
      <SecondLook style={styles.secondLook} />
      <ThirdLook />
      <View style={styles.pageHeader}></View>

      <View style={styles.mainContent}></View>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setCurrentPage("Enter")}
        underlayColor={Colors.medium}
      >
        <Text style={[styles.ButtonText]}>Log In</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  loginRight: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  button: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.heavy,
  },
  ButtonText: {
    color: "white",
  },
});

export default Enter;
