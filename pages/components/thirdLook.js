import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../style/colors";
import ThirdLookModals from "../components/thirdLookModals";

const thirdLook = ({ style }) => {
  const planets = [
    {
      logo: require("../../assets/images/thirdModalPics/min/planets1-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets2-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets3-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets4-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets5-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets6-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets7-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/planets8-min.png"),
    },
  ];
  const moons = [
    {
      logo: require("../../assets/images/thirdModalPics/min/moon1-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/moon2-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/moon3-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/moon4-min.png"),
    },
  ];
  const stars = [
    {
      logo: require("../../assets/images/thirdModalPics/min/star1-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/star2-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/star3-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/star4-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/star5-min.png"),
    },
  ];
  const gal = [
    {
      logo: require("../../assets/images/thirdModalPics/min/gal1-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/gal2-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/gal3-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/gal4-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/gal5-min.png"),
    },
    {
      logo: require("../../assets/images/thirdModalPics/min/gal6-min.png"),
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
          <Text style={styles.intro}>CELESTIAL BODIES</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.whatContainer}>
            <Text style={styles.whatTitle}>THE PLANETS</Text>
            <Text style={styles.whatDesc}>
              Planets are celestial bodies that orbits a star, is spherical in
              shape due to its own gravity, and has cleared its orbit of other
              debris.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <ScrollView
              horizontal={true} // Enable horizontal scrolling
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false} // Optional: Hide scroll indicators
            >
              {planets.map((member, index) => (
                <ThirdLookModals
                  key={index}
                  property={member}
                  style={styles.modal}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.whatContainer}>
            <Text style={styles.whatTitle}>THE MOONS</Text>
            <Text style={styles.whatDesc}>
              A moon is a natural satellite that orbits a planet or dwarf
              planet.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false}
            >
              {moons.map((member, index) => (
                <ThirdLookModals
                  key={index}
                  property={member}
                  style={styles.modal}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.whatContainer}>
            <Text style={styles.whatTitle}>THE STARS</Text>
            <Text style={styles.whatDesc}>
              Stars are massive, luminous spheres of hot gas, primarily hydrogen
              and helium, that produce energy through nuclear fusion in their
              cores.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false}
            >
              {stars.map((member, index) => (
                <ThirdLookModals
                  key={index}
                  property={member}
                  style={styles.modal}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.whatContainer}>
            <Text style={styles.whatTitle}>THE GALAXIES</Text>
            <Text style={styles.whatDesc}>
              A galaxy is a vast system of stars, stellar remnants, interstellar
              gas, dust, and dark matter, all bound together by gravity.
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false}
            >
              {gal.map((member, index) => (
                <ThirdLookModals
                  key={index}
                  property={member}
                  style={styles.modal}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <Text style={styles.whatTitle}>ASTEROIDS & COMETS</Text>
        <View style={styles.astero}>
          <Image
            source={require("../../assets/images/ASTEROIDS/astro1-min.png")}
            resizeMode="contain"
            style={styles.asteroImg}
          />
        </View>
        <View style={styles.astero}>
          <Image
            source={require("../../assets/images/ASTEROIDS/astro2-min.png")}
            resizeMode="contain"
            style={styles.asteroImg}
          />
        </View>
        <View style={styles.astero}>
          <Image
            source={require("../../assets/images/ASTEROIDS/astro3-min.png")}
            resizeMode="contain"
            style={styles.asteroImg}
          />
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
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "column",
    gap: 8,
  },
  introContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
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
  whatContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  whatTitle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "LeagueSpartan-Bold",
    color: Colors.heavy,
    paddingVertical: 2,
  },
  whatDesc: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 9.5,
    lineHeight: 10,
    textAlign: "center",
  },

  //cardflips
  sectionContainer: {
    marginVertical: 10,
    height: 160,
  },
  sectionHeader: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 20,
    color: Colors.heavy,
  },
  modalContainer: {
    height: 158,
    gap: 8,
  },
  astero: {
    margin: "auto",
    marginVertical: 0,
    width: "100%",
    paddingVertical: 2,
  },
  asteroImg: {
    width: "100%",
    height: 84,
  },
});

export default thirdLook;
