import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";
import Banner from "./components/banner";
import AboutModals from "./components/aboutModals";

const AboutUs = ({ setCurrentPage }) => {
  const member = [
    {
      pic: require("../assets/images/members/1.png"),
      logo: require("../assets/images/members/2.png"),
    },
    { pic: require("../assets/images/members/2.png") },
    { pic: require("../assets/images/members/3.png") },
    { pic: require("../assets/images/members/4.png") },
    { pic: require("../assets/images/members/5.png") },
    { pic: require("../assets/images/members/6.png") },
    { pic: require("../assets/images/members/7.png") },
  ];
  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueGothic-Regular": require("../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <View style={styles.navbar}>
      <ScrollView style={styles.container}>
        <Banner source={require("../assets/images/banner2.png")} />
        <View style={styles.content}>
          {member.map((member, index) => {
            return (
              <AboutModals key={index} property={member} style={styles.modal} />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableWithoutFeedback onPress={() => setCurrentPage("Login")}>
          <Image
            source={require("../assets/images/navigation/activeAbout.png")}
            style={styles.navLogo}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentPage("Dashboard")}>
          <Image
            source={require("../assets/images/navigation/home.png")}
            style={styles.navLogo}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentPage("Enter")}>
          <Image
            source={require("../assets/images/navigation/logout.png")}
            style={styles.navLogo}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: { flex: 1 },
  container: {
    flexGrow: 1,
  },
  content: {
    width: "100%",
    paddingVertical: 40,
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.black
  },
  navLogo: {
    width: 40,
    height: 40,
  },
});

export default AboutUs;
