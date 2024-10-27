import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import Colors from "../style/colors";
import { useFonts } from "expo-font";
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Login = ({ setCurrentPage }) => {
  //ANIMATED TOUCHABLE HIGHLIGHT
  const AnimatedTouchableHighlight =
    Animated.createAnimatedComponent(TouchableHighlight);

  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueGothic-Regular": require("../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return;
  // FONTSSSSS

  //ANIMATION
  const astronaut = useSharedValue(-400);
  useEffect(() => {
    astronaut.value = withSpring(0, {
      damping: 22,
      stiffness: 200,
    });
  }, []);
  const astronautStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: astronaut.value }],
    };
  });

  const astroTranslateX = useSharedValue(40);
  useEffect(() => {
    astroTranslateX.value = withSpring(0, {
      damping: 200, //bounce
      stiffness: 200, //duration
    });
  }, []);
  const astroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: astroTranslateX.value }],
    };
  });

  const moonRotate = useSharedValue(90);
  useEffect(() => {
    moonRotate.value = withSpring(0, {
      damping: 22, //bounce
      stiffness: 200, //duration
    });
  }, []);
  const moonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${moonRotate.value}deg` }],
    };
  });

  const translateLeft = useSharedValue(400);
  useEffect(() => {
    translateLeft.value = withSpring(0, {
      damping: 50, //bounce
      stiffness: 500, //duration
    });
  }, []);
  const translateLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateLeft.value }],
    };
  });

  const opacity = useSharedValue(0);
  useEffect(() => {
    opacity.value = withSpring(1, {
      damping: 50, // bounce
      stiffness: 800, // duration
    });
  }, []);
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  return (
    <View style={styles.container}>
      {/* MOON */}
      <Animated.Image
        source={require("../assets/images/MOON 90-min.png")}
        style={[styles.moonImage, moonStyle]}
      />

      <View style={styles.title}>
        <Animated.Text style={[styles.astro, astroStyle]}>ASTRO</Animated.Text>
        <Animated.Text style={[styles.infinity, opacityStyle]}>
          <Text>"To </Text>
          <Text style={styles.colorBlue}>Infinity </Text>
          <Text>and </Text>
          <Text style={styles.colorBlue}>Beyond"</Text>
        </Animated.Text>
        <Animated.Image
          source={require("../assets/images/sitAstro-min.png")}
          style={[styles.sitAstro, astronautStyle]}
        />
      </View>

      {/* BUTTONS */}
      <AnimatedTouchableHighlight
        style={[styles.button, styles.btn1, translateLeftStyle]}
        onPress={() => setCurrentPage("Login")}
        underlayColor={Colors.medium}
      >
        <Text style={[styles.ButtonText, styles.btn1Text]}>Log In</Text>
      </AnimatedTouchableHighlight>
      {/* 2nd BUTTON */}
      <AnimatedTouchableHighlight
        style={[styles.button, styles.btn2, translateLeftStyle]}
        onPress={() => setCurrentPage("Enter")}
        underlayColor={Colors.medium}
      >
        <Text style={[styles.ButtonText, styles.btn2Text]}>About Us</Text>
      </AnimatedTouchableHighlight>

      {/* InputField */}
      <Animated.View style={[styles.inputTextContainer, translateLeftStyle]}>
        <View style={styles.iconTextContainer}>
          <Image
            source={require("../assets/images/UserLogo.png")}
            style={[styles.icon, styles.userIcon]}
          />
          <TextInput style={styles.inputText} placeholder="Email" />
        </View>
        <View style={styles.iconTextContainer}>
          <Image
            source={require("../assets/images/LockLogo.png")}
            style={[styles.icon, styles.lockIcon]}
          />
          <TextInput style={styles.inputText} placeholder="Password" />
          <Image
            source={require("../assets/images/EyeOffLogo.png")}
            style={[styles.icon, styles.eyeIcon]}
          />
        </View>
        <Text style={styles.forgot}>Forgot Password</Text>
        {/* Button */}
        <AnimatedTouchableHighlight
          style={[styles.loginButton, translateLeftStyle]}
          onPress={() => setCurrentPage("Dashboard")}
          underlayColor={Colors.medium}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </AnimatedTouchableHighlight>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moonImage: {
    position: "absolute",
    bottom: -220,
    width: 400,
    height: 400,
  },
  title: {
    position: "absolute",
    top: 165,
  },
  infinity: {
    position: "absolute",
    top: 10,
    fontSize: 10,
    fontWeight: "bold",
    transform: [{ translateX: -40 }],
  },
  colorBlue: {
    color: Colors.medium,
  },
  astro: {
    position: "relative",
    left: -48,
    fontFamily: "LeagueGothic-Regular",
    fontSize: 100,
  },
  sitAstro: {
    position: "absolute",
    width: 170,
    height: 160,
    right: -86,
    top: -10,
  },
  button: {
    width: "80%",
    height: "8%",
    left: -400,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
  },
  btn1: {
    marginTop: 40,
    backgroundColor: Colors.light,
  },
  btn2: {
    backgroundColor: "black",
  },
  ButtonText: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 20,
  },
  btn1Text: {
    color: Colors.heavy,
  },
  btn2Text: {
    color: "white",
  },

  // INPUT FIELDS

  inputTextContainer: {
    position: "absolute",
    top: 300,
    width: "75%",
    gap: 10,
  },
  iconTextContainer: {
    backgroundColor: Colors.light,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    paddingVertical: 10,
    paddingLeft: 10,
    gap: 6,
    borderRadius: 5,
  },
  icon: {
    width: 16,
    height: 16,
  },
  inputText: {
    flex: 1,
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: "600",
  },
  forgot: {
    position: "relative",
    top: -12,
    textAlign: "right",
    textDecorationLine: "underline",
    textDecorationColor: "black",
  },
  loginButton: {
    marginVertical: 16,
    backgroundColor: "black",
    width: 120,
    height: 40,
    paddingVertical: 4,
    margin: "auto",
    borderRadius: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: "LeagueSpartan-Bold",
    textAlign: "center",
    color: "white",
  },
});

export default Login;
