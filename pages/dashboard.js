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
import FirstLook from "./components/firstLook";
import SecondLook from "./components/secondLook";

const branches = [
  {
    logo: require("../assets/images/modalPics/branches/solar.png"),
    desc: "The study of the physics behind celestial bodies and phenomena (e.g., gravity, radiation, black holes).",
    pic: require("../assets/images/modalPics/branches/astrophy1.png"),
  },
  {
    logo: require("../assets/images/modalPics/branches/saturn.png"),
    desc: "The branch of astronomy that deals with measuring the positions, distances, and motions of celestial bodies.",
    pic: require("../assets/images/modalPics/branches/ASTROMET.png"),
  },
  {
    logo: require("../assets/images/modalPics/branches/alien.png"),
    desc: "The study of the geological features of celestial bodies such as planets, moons, asteroids, and comets.",
    pic: require("../assets/images/modalPics/branches/ASTROBIO.png"),
  },
  {
    logo: require("../assets/images/modalPics/branches/rocky-mountain.png"),
    desc: " The study of life in the universe, including its origins, evolution, and potential for existence beyond Earth.",
    pic: require("../assets/images/modalPics/branches/ASTROGEO.png"),
  },
];
const astronomers = [
  {
    logo: require("../assets/images/modalPics/astronomers/telescope.png"),
    desc: "The 'Father of Observational Astronomy' who supported the heliocentric model and used early telescopes.",
    pic: require("../assets/images/modalPics/astronomers/GALILEO GALILEI.png"),
  },
  {
    logo: require("../assets/images/modalPics/astronomers/orbit.png"),
    desc: "Discovered that galaxies are moving away from us, leading to the concept of the expanding universe.",
    pic: require("../assets/images/modalPics/astronomers/EDWIN HUBBLE.png"),
  },
  {
    logo: require("../assets/images/modalPics/astronomers/black hole.png"),
    desc: "Stephen Hawking is known for his work on black holes and the nature of space-time.",
    pic: require("../assets/images/modalPics/astronomers/STEPHEN HAWKING.png"),
  },
  {
    logo: require("../assets/images/modalPics/astronomers/comet.png"),
    desc: "Caroline Herschel was the first woman to discover a comet!",
    pic: require("../assets/images/modalPics/astronomers/CAROLINE HERSCHEL.png"),
  },
];

const Enter = ({ setCurrentPage }) => {

  //ANIMATIONNNNNNNNNNNN

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
      <Banner />
      <FirstLook style={styles.firstLook} />
      <SecondLook style={styles.secondLook} />
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
  firstLook: {},
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
