import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";
import Banner from "./components/banner";
import LoginRight from "./components/loginToTheRight";
import FirstLook from "./components/firstLook";
import SecondLook from "./components/secondLook";
import ThirdLook from "./components/thirdLook";
import FourthLook from "./components/fourthLook";
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
      <Banner source={require("../assets/images/banner.png")} />
      <FirstLook />
      {/* <SecondLook /> */}
      {/* <ThirdLook />  */}
      {/* <FourthLook /> */}
      <View style={styles.pageHeader}></View>

      <View style={styles.mainContent}></View>
      <View style={styles.end}>
        <Text style={styles.endText}>
          You've reached the end of this exploration. Thank you for joining us
          on this cosmic journey!
        </Text>
        <Image
          source={require("../assets/images/trivia/rocket.png")}
          style={styles.endImage}
          resizeMode="contain"
        />
      </View>

      <TouchableHighlight
        style={styles.button}
        onPress={() => setCurrentPage("Enter")}
        underlayColor={Colors.greyishBlue}
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
    backgroundColor: Colors.blackishGrey,
  },
  ButtonText: {
    color: Colors.white,
  },
  end: {
    marginHorizontal: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  endText: {
    width: "60%",
    textAlign: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    fontSize: 10,
    fontFamily: "LeagueSpartan-Medium",
    color: Colors.black,
    paddingHorizontal: 10,
  },
  endImage: {
    width: 48,
    height: 48,
  },
});

export default Enter;
