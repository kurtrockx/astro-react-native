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
      pic: require("../assets/images/members/11.png"),
      logo: require("../assets/images/members/2.png"),
    },
    { pic: require("../assets/images/members/22.png") },
    { pic: require("../assets/images/members/33.png") },
    { pic: require("../assets/images/members/44.png") },
    { pic: require("../assets/images/members/55.png") },
    { pic: require("../assets/images/members/66.png") },
    { pic: require("../assets/images/members/77.png") },
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
        <TouchableWithoutFeedback onPress={() => setCurrentPage("AboutUs")}>
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
      <Image
        source={require("../assets/images/back.png")}
        resizeMode="contain"
        style={styles.back}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: { flex: 1, paddingBottom: 40 },
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
    borderColor: Colors.black,
  },
  navLogo: {
    width: 32,
    height: 32,
  },
  back: {
    position: "absolute",
    zIndex: -1,
    bottom: -120,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default AboutUs;
