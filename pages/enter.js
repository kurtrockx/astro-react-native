import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";

const Enter = ({ setCurrentPage }) => {
  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueGothic-Regular": require("../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <View style={styles.container}>
      {/* MOON */}
      <Image
        source={require("../assets/images/MOON-min.png")}
        style={styles.moonImage}
      />

      <View style={styles.title}>
        <Text style={styles.astro}>ASTRO</Text>
      </View>

      {/* BUTTONS */}
      <TouchableHighlight
        style={[styles.button, styles.btn1]}
        onPress={() => setCurrentPage("Login")}
        underlayColor={Colors.greyishBlue}
      >
        <Text style={[styles.ButtonText, styles.btn1Text]}>Log In</Text>
      </TouchableHighlight>
      {/* 2nd BUTTON */}
      <TouchableHighlight
        style={[styles.button, styles.btn2]}
        onPress={() => setCurrentPage("Dashboard")}
        underlayColor={Colors.black}
      >
        <Text style={[styles.ButtonText, styles.btn2Text]}>About Us</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moonImage: {
    position: "absolute",
    width: 400,
    height: 400,
    top: 550,
  },
  title: {
    position: "absolute",
    top: 165,
  },
  astro: {
    position: "relative",
    fontFamily: "LeagueGothic-Regular",
    fontSize: 100,
  },
  button: {
    width: "80%",
    height: "8%",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
  },
  btn1: {
    marginTop: 40,
    backgroundColor: Colors.white,
  },
  btn2: {
    backgroundColor: Colors.blackishGrey,
  },
  ButtonText: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 20,
  },
  btn1Text: {
    color: Colors.dark,
  },
  btn2Text: {
    color: Colors.white,
  },
});

export default Enter;
