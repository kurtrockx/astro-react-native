import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";
import Banner from "./components/banner";
import FirstLook from "./components/firstLook";
import SecondLook from "./components/secondLook";
import ThirdLook from "./components/thirdLook";
import FourthLook from "./components/fourthLook";
import React, { useEffect, useRef } from "react";
import Animated from "react-native-reanimated";
import {
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedStyle,
} from "react-native-reanimated";

const Dashboard = ({ setCurrentPage }) => {

  const scrollViewRef = useRef(null);
  const scrollToSection = (y) => {
    scrollViewRef.current.scrollTo({
      y: y,
      animated: true,
    });
  };

  //ANIMATION
  const opacityBegone = useSharedValue(0);
  useEffect(() => {
    opacityBegone.value = withDelay(350, withTiming(1, { duration: 200 }));
  }, []);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityBegone.value,
    };
  });

  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-SemiBold": require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueGothic-Regular": require("../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  const scroll1 = 660 ;
  const scroll2 = 1340;
  const scroll3 = 3000;

  return (
    <View style={styles.nav}>
      <ScrollView contentContainerStyle={styles.container} ref={scrollViewRef}>
        <Banner source={require("../assets/images/banner.png")} />
        <FirstLook
          scroll1={scroll1}
          scroll2={scroll2}
          scroll3={scroll3}
          scrollViewRef={scrollViewRef}
        />
        <SecondLook />
        <ThirdLook /> 
        <FourthLook />
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
      <View style={styles.navigation}>
        <TouchableWithoutFeedback onPress={() => setCurrentPage("AboutUs")}>
          <Image
            source={require("../assets/images/navigation/about.png")}
            style={styles.navLogo}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setCurrentPage("Dashboard")}>
          <Image
            source={require("../assets/images/navigation/homeActive.png")}
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
      <Animated.Image
        source={require("../assets/images/back.png")}
        resizeMode="contain"
        style={[styles.back, opacityStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: { flex: 1 },
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
    bottom: -140,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default Dashboard;
