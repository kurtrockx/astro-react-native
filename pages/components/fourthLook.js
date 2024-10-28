import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../style/colors";
import ThirdLookModals from "../components/thirdLookModals";

const fourthLook = ({ style }) => {
  const trivia = [
    {
      logo: require("../../assets/images/trivia/1.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/2.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/3.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/4.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/5.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/6.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/7.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/8.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
    {
      logo: require("../../assets/images/trivia/9.png"),
      desc: "that the first living creature in space was a dog namedLaika? She was launched aboard Sputnik 2 by the SovietUnion in 1957, making her the first animal to orbit Earth!",
    },
  ];

  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-SemiBold": require("../../assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueSpartan-Black": require("../../assets/fonts/LeagueSpartan-Black.ttf"),
    "LeagueGothic-Regular": require("../../assets/fonts/LeagueGothic-Regular.ttf"),
    "LeagueSpartan-Regular": require("../../assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Medium": require("../../assets/fonts/LeagueSpartan-Medium.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  return (
    <View style={[styles.container, style]}>
      <View style={styles.borderContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.intro}>SPACE TRIVIAS</Text>
        </View>
        <View style={styles.mainContainer}>
          {trivia.map((el) => {
            return (
              <View style={styles.triviaContainer}>
                <Image
                  source={el.logo}
                  style={styles.imageContainer}
                  resizeMode="contain"
                />
                <View style={styles.triviaText}>
                  <Text style={styles.didYouKnow}>
                    DID YOU KNOW_
                    <Text style={styles.didDesc}>{el.desc}</Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    marginVertical: 0,
    width: 310,
  },
  borderContainer: {
    marginTop: 4,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    flexDirection: "column",
    gap: 8,
    paddingBottom: 20,
  },
  introContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  intro: {
    fontFamily: "LeagueSpartan-Black",
    fontSize: 18,
    textAlign: "center",
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  triviaContainer: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey,
    marginVertical: 2,
  },
  imageContainer: {
    width: "10%",
    height: "100%",
  },
  triviaText: {
    width: 236,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  didYouKnow: {
    color: Colors.darkBlue,
    fontFamily: "LeagueSpartan-Bold",
    textAlign: "justify",
    fontSize: 11,
  },
  didDesc: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 10,
  },
});

export default fourthLook;
