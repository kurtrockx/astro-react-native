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
  //moonUp
  const translateYmoon = useSharedValue(360); // Start off-screen higher
  useEffect(() => {
    // moonBounce
    translateYmoon.value = //moon start
      withSpring(0, {
        damping: 16,
        stiffness: 250,
      });
  }, []);
  // whatHappens
  const moonUpStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYmoon.value }],
    };
  });

  //Astronaut
  const catapultRight = useSharedValue(500);
  useEffect(() => {
    // astroBounce
    catapultRight.value = withDelay(
      500, //astro start
      withSpring(0, {
        damping: 18,
        stiffness: 150,
      })
    );
  }, []);
  // whatHappens
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: catapultRight.value,
        },
      ],
    };
  });

  // cardsSharedValue
  const translateXfromLeft = useSharedValue(-500); // Start off-screen to the left
  const translateXfromRight = useSharedValue(500); // Start off-screen to the right
  const opacity = useSharedValue(0); // Start with 0 opacity (invisible)

  useEffect(() => {
    // from left
    translateXfromLeft.value = withDelay(
      800,
      withSpring(0, {
        damping: 20,
      })
    );
    // from right
    translateXfromRight.value = withDelay(
      800,
      withSpring(0, {
        damping: 20,
      })
    );
  }, []);

  // Create an animated style for the element coming from the left
  const animatedStyleLeft = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXfromLeft.value }], // Slide in from left
    };
  });

  // Create an animated style for the element coming from the right
  const animatedStyleRight = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXfromRight.value }], // Slide in from right
    };
  });

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.dashboardButton}
        onPress={() => setCurrentPage("Login")}
        underlayColor={Colors.medium} // Background color when pressed
      >
        <Text style={styles.dashButtonText}>LOGOUT</Text>
      </TouchableHighlight>

      <Animated.View style={[styles.inFront, animatedStyle]}>
        <Image
          style={styles.astronaut}
          source={require("../assets/dashboardPics/fly.png")}
        />
      </Animated.View>

      <Animated.View style={[styles.moon, moonUpStyle]}>
        <Image
          style={styles.moonImage}
          source={require("../assets/images/moon.png")}
        />
      </Animated.View>

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
  },
  moonImage: {
    top: -100,
    width: 360,
    height: 360,
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
    width: 110,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pictures: {
    width: "80%",
    height: "80%",
  },
  borderRight: {
    borderRightWidth: 2,
    borderRightColor: "white",
  },
  borderLeft: {
    borderLeftWidth: 2,
    borderLeftColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  c1: {
    flexDirection: "row",
    backgroundColor: Colors.light,
  },
  c2: {
    flexDirection: "row",
    backgroundColor: Colors.medium,
  },
  c3: {
    flexDirection: "row",
    backgroundColor: Colors.heavy,
  },
  cWhite: {
    color: "white",
  },
  c4: {
    flexDirection: "row",
    backgroundColor: Colors.heavier,
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
    backgroundColor: Colors.light,
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
