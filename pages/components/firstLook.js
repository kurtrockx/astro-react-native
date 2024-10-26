import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../style/colors";
const firstLook = ({ style }) => {
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
    <View style={[styles.container, style]}>
      <Image
        source={require("../../assets/dashboardPics/firstAstronaut.png")}
        style={styles.firstAstronaut}
        resizeMode="contain"
      />
      <View style={styles.discover}>
        <Text style={styles.discoText}>DISCOVER</Text>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dashboardPics/introAstronomy.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dashboardPics/introCelestial.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../assets/dashboardPics/introSpace.png")}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.start}>
        <Text style={styles.startText}>START LEARNING</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    marginVertical: 0,
    width: 310,
    height: 500,
  },
  firstAstronaut: {
    margin: "auto",
    marginVertical: 4,
    width: 40,
    height: 40,
  },
  discover: {
    marginTop: 4,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "column",
    gap: 8,
    paddingVertical: 16,
  },
  discoText: {
    fontFamily: "LeagueSpartan-Medium",
    position: "absolute",
    width: "100%",
    top: -14,
    fontSize: 18,
    textAlign: "center",
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
    backgroundColor: Colors.darkGrey,
    width: "90%",
    marginTop: 20,
    marginHorizontal: "auto",
    borderRadius: 16,
    paddingVertical: 12,
  },
  startText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontFamily: "LeagueSpartan-Bold",
  },
});

export default firstLook;
