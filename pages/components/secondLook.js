import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import Colors from "../../style/colors";
import CustomSizedModal from "../components/modals";

const secondLook = ({ style }) => {
  const branches = [
    {
      logo: require("../../assets/images/modalPics/branches/solar.png"),
      desc: "The study of the physics behind celestial bodies and phenomena (e.g., gravity, radiation, black holes).",
      pic: require("../../assets/images/modalPics/branches/astrophy1.png"),
    },
    {
      logo: require("../../assets/images/modalPics/branches/saturn.png"),
      desc: "The branch of astronomy that deals with measuring the positions, distances, and motions of celestial bodies.",
      pic: require("../../assets/images/modalPics/branches/ASTROMET.png"),
    },
    {
      logo: require("../../assets/images/modalPics/branches/alien.png"),
      desc: "The study of the geological features of celestial bodies such as planets, moons, asteroids, and comets.",
      pic: require("../../assets/images/modalPics/branches/ASTROBIO.png"),
    },
    {
      logo: require("../../assets/images/modalPics/branches/rocky-mountain.png"),
      desc: " The study of life in the universe, including its origins, evolution, and potential for existence beyond Earth.",
      pic: require("../../assets/images/modalPics/branches/ASTROGEO.png"),
    },
  ];
  const astronomers = [
    {
      logo: require("../../assets/images/modalPics/astronomers/telescope.png"),
      desc: "The 'Father of Observational Astronomy' who supported the heliocentric model and used early telescopes.",
      pic: require("../../assets/images/modalPics/astronomers/GALILEO GALILEI.png"),
    },
    {
      logo: require("../../assets/images/modalPics/astronomers/orbit.png"),
      desc: "Discovered that galaxies are moving away from us, leading to the concept of the expanding universe.",
      pic: require("../../assets/images/modalPics/astronomers/EDWIN HUBBLE.png"),
    },
    {
      logo: require("../../assets/images/modalPics/astronomers/black hole.png"),
      desc: "Stephen Hawking is known for his work on black holes and the nature of space-time.",
      pic: require("../../assets/images/modalPics/astronomers/STEPHEN HAWKING.png"),
    },
    {
      logo: require("../../assets/images/modalPics/astronomers/comet.png"),
      desc: "Caroline Herschel was the first woman to discover a comet!",
      pic: require("../../assets/images/modalPics/astronomers/CAROLINE HERSCHEL.png"),
    },
  ];
  const tools = [
    {
      logo: require("../../assets/images/modalPics/tools/tele.png"),
      desc: "Telescopes gather light and other types of electromagnetic radiation to observe distant stars, planets, and galaxies from Earth or space.",
      pic: require("../../assets/images/modalPics/tools/telescope.png"),
    },
    {
      logo: require("../../assets/images/modalPics/tools/rov.png"),
      desc: "Space Rovers are robotic vehicles sent to explore and collect data from the surfaces of planets and moons.",
      pic: require("../../assets/images/modalPics/tools/rover.png"),
    },
    {
      logo: require("../../assets/images/modalPics/tools/sat.png"),
      desc: "Space Probes are uncrewed spacecraft launched to investigate planets, moons, comets, and more.",
      pic: require("../../assets/images/modalPics/tools/probe.png"),
    },
    {
      logo: require("../../assets/images/modalPics/tools/obs.png"),
      desc: "Observatories are facilities with  instruments that allow astronomers to  monitor and study celestial phenomena.",
      pic: require("../../assets/images/modalPics/tools/observatory.png"),
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
          <Text style={styles.intro}>INTRODUCTION TO ASTRONOMY</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.whatContainer}>
            <Text style={styles.whatTitle}>What is Astronomy?</Text>
            <Text style={styles.whatDesc}>
              The scientific study of everything beyond Earth's atmosphere.
              including stars. planets. galaxies. ond the universe's structure
              ond behavior.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Branches of Anatomy</Text>
            <Text style={styles.sectionDesc}>
              Astronomy can divided into four main branches:
            </Text>
            <ScrollView
              horizontal={true} // Enable horizontal scrolling
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false} // Optional: Hide scroll indicators
            >
              {branches.map((member, index) => (
                <CustomSizedModal
                  key={index}
                  property={member}
                  style={styles.modal}
                />
              ))}
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Famous Astronomers</Text>
            <Text style={styles.sectionDesc}>
              Meet some of the well-known astronomers:
            </Text>
            <ScrollView
              horizontal={true} // Enable horizontal scrolling
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false} // Optional: Hide scroll indicators
            >
              {astronomers.map((member, index) => (
                <CustomSizedModal key={index} property={member} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Space Tools & Gadgets</Text>
            <Text style={styles.sectionDesc}>
              Meet some of the well-known astronomers:
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.modalContainer}
              showsHorizontalScrollIndicator={false}
            >
              {tools.map((member, index) => (
                <CustomSizedModal key={index} property={member} />
              ))}
            </ScrollView>
          </View>
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
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  intro: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 18,
    textAlign: "center",
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  whatContainer: {
    flexDirection: "column",
    gap: 5,
  },
  whatTitle: {
    fontSize: 20,
    fontFamily: "LeagueSpartan-Bold",
    color: Colors.heavy,
  },
  whatDesc: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 12,
    lineHeight: 14,
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
  sectionDesc: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 12,
  },
  modalContainer: {
    gap: 4,
  },
});

export default secondLook;
