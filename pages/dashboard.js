import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Colors from "../style/colors";
import {
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Dashboard = ({ setCurrentPage }) => {
  //Astronaut
  const catapultRight = useSharedValue(500);

  useEffect(() => {
    // Animate with spring to create a bounce effect
    catapultRight.value = withSpring(0, {
      damping: 18,
      stiffness: 150,
    });
  }, []);

  // Create an animated style based on the shared value
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: catapultRight.value }],
    };
  });

  // Shared values for position (translateX) and opacity
  const translateXfromLeft = useSharedValue(-500); // Start off-screen to the left
  const translateXfromRight = useSharedValue(500); // Start off-screen to the right
  const opacity = useSharedValue(0); // Start with 0 opacity (invisible)

  useEffect(() => {
    // Animate the element from the left
    translateXfromLeft.value = withDelay(
      400,
      withSpring(0, {
        damping: 18,
        stiffness: 150,
      })
    );

    // Animate the element from the right
    translateXfromRight.value = withDelay(
      600,
      withSpring(0, {
        damping: 18,
        stiffness: 150,
      })
    );

    // Fade in both elements
    opacity.value = withTiming(1, {
      duration: 500, // Control the fade-in speed
    });
  }, []);

  // Create an animated style for the element coming from the left
  const animatedStyleLeft = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXfromLeft.value }], // Slide in from left
      opacity: opacity.value, // Fade-in effect
    };
  });

  // Create an animated style for the element coming from the right
  const animatedStyleRight = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXfromRight.value }], // Slide in from right
      opacity: opacity.value, // Fade-in effect
    };
  });

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.dashboardButton}
        onPress={() => setCurrentPage("Login")}
        underlayColor={Colors.mediumBlue} // Background color when pressed
      >
        <Text style={styles.dashButtonText}>LOGOUT</Text>
      </TouchableHighlight>

      <Animated.View style={[styles.inFront, animatedStyle]}>
        <Image
          style={styles.astronaut}
          source={require("../assets/dashboardPics/astronaut.png")}
        />
      </Animated.View>
      <Image
        style={styles.moon}
        source={require("../assets/dashboardPics/moon.png")}
      />
      <ScrollView contentContainerStyle={styles.cardCont}>
        <Animated.View style={[styles.card, styles.c1, animatedStyleLeft]}>
          <View style={[styles.cardPicture, styles.borderRight]}>
            <Image
              style={styles.pictures}
              source={require("../assets/dashboardPics/bigDipper.png")}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Find out about constellations</Text>
            <Text style={styles.cardDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Joker 2.
            </Text>
          </View>
        </Animated.View>
        <Animated.View style={[styles.card, styles.c2, animatedStyleRight]}>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Our Solar System</Text>
            <Text style={styles.cardDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Joker 2.
            </Text>
          </View>
          <View style={[styles.cardPicture, styles.borderLeft]}>
            <Image
              style={styles.pictures}
              source={require("../assets/dashboardPics/solarSystem.png")}
            />
          </View>
        </Animated.View>
        <Animated.View style={[styles.card, styles.c3, animatedStyleLeft]}>
          <View style={[styles.cardPicture, styles.borderRight]}>
            <Image
              style={styles.pictures}
              source={require("../assets/dashboardPics/galaxy.png")}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={[styles.cardTitle, styles.cWhite]}>
              In a Galaxy Far Far Away{" "}
            </Text>
            <Text style={[styles.cardDescription, styles.cWhite]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Joker 2.
            </Text>
          </View>
        </Animated.View>
        <Animated.View style={[styles.card, styles.c4, animatedStyleRight]}>
          <View style={styles.cardText}>
            <Text style={[styles.cardTitle, styles.cWhite]}>The Universe </Text>
            <Text style={[styles.cardDescription, styles.cWhite]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Joker 2.
            </Text>
          </View>
          <View style={[styles.cardPicture, styles.borderLeft]}>
            <Image
              style={styles.pictures}
              source={require("../assets/dashboardPics/universe.png")}
            />
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 20,
  },
  cardCont: {
    flexDirection: "column",
    gap: 20,
    paddingBottom: 40,
    marginTop: 24,
  },
  astronaut: {
    width: 140,
    height: 140,
    zIndex: 10,
    marginVertical: 20,
  },
  moon: {
    position: "absolute",
    top: 20,
    width: 420,
    height: 420,
  },
  card: {
    width: 310,
    height: 100,
    borderRadius: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  cardPicture: {
    width: 100,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pictures: {
    width: "80%",
    height: "80%",
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "white",
  },
  borderLeft: {
    alignSelf: "flex-end",
    borderLeftWidth: 1,
    borderLeftColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  c1: {
    flexDirection: "row",
    backgroundColor: Colors.lightBlue,
  },
  c2: {
    flexDirection: "row",
    backgroundColor: Colors.mediumBlue,
  },
  c3: {
    flexDirection: "row",
    backgroundColor: Colors.heavyBlue,
  },
  cWhite: {
    color: "white",
  },
  c4: {
    flexDirection: "row",
    backgroundColor: Colors.heavierBlue,
  },
  cardText: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardDescription: {
    textAlign: "justify",
    fontSize: 6,
    width: 180,
  },
  inFront: {
    zIndex: 1000,
  },
  dashboardButton: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderBottomRightRadius: 10,
    backgroundColor: Colors.lightBlue,
    zIndex: 1,
    borderWidth: 1,
    borderRightColor: "white",
    borderBottomColor: "white",
  },
  dashButtonText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Dashboard;
