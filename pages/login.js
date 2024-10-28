import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Settings,
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

  const triggerOpacity = useSharedValue(1);
  const triggerOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: triggerOpacity.value,
    };
  });
  const triggerOpacityAnimation = () => {
    triggerOpacity.value = withSpring(0, {
      damping: 50, // bounce
      stiffness: 800, // duration
    });
  };

  return (
    <Animated.View style={[styles.container, triggerOpacityStyle]}>
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
        underlayColor={Colors.greyishBlue}
      >
        <Text style={[styles.ButtonText, styles.btn1Text]}>Log In</Text>
      </AnimatedTouchableHighlight>
      {/* 2nd BUTTON */}
      <AnimatedTouchableHighlight
        style={[styles.button, styles.btn2, translateLeftStyle]}
        onPress={() => setCurrentPage("Enter")}
        underlayColor={Colors.greyishBlue}
      >
        <Text style={[styles.ButtonText, styles.btn2Text]}>About Us</Text>
      </AnimatedTouchableHighlight>

      {/* InputField */}
      <Animated.View style={[styles.inputTextContainer, translateLeftStyle]}>
        <View style={styles.borderInput}>
          <View style={styles.iconTextContainer}>
            <Image
              source={require("../assets/images/UserLogo.png")}
              style={[styles.icon, styles.userIcon]}
              resizeMode="contain"
            />
            <TextInput style={styles.inputText} placeholder="Email" />
          </View>
          <View style={styles.iconTextContainer}>
            <Image
              source={require("../assets/images/LockLogo.png")}
              style={[styles.icon, styles.lockIcon]}
              resizeMode="contain"
            />
            <TextInput style={styles.inputText} placeholder="Password" />
            <Image
              source={require("../assets/images/EyeOffLogo.png")}
              style={[styles.icon, styles.eyeIcon]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.forgot}>Forgot Password</Text>
        </View>
        {/* Button */}
        <AnimatedTouchableHighlight
          style={[styles.loginButton, translateLeftStyle]}
          onPress={() => {
            triggerOpacityAnimation();
            setTimeout(() => setCurrentPage("Dashboard"), 1000);
          }}
          underlayColor={Colors.greyishBlue}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </AnimatedTouchableHighlight>
      </Animated.View>
    </Animated.View>
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
    width: 400,
    height: 400,
    top: 550,
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
    color: Colors.greyishBlue,
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
    backgroundColor: Colors.white,
  },
  btn2: {
    backgroundColor: Colors.black,
  },
  ButtonText: {
    fontFamily: "LeagueSpartan-Bold",
    fontSize: 20,
  },
  btn1Text: {
    color: Colors.blackishGrey,
  },
  btn2Text: {
    color: Colors.white,
  },

  // INPUT FIELDS
  borderInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 10,
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  inputTextContainer: {
    position: "absolute",
    top: 300,
    width: "80%",
    gap: 10,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.black,
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
    textAlign: "right",
    textDecorationLine: "underline",
    textDecorationColor: Colors.greyishBlue,
    color: Colors.greyishBlue,
  },
  loginButton: {
    marginVertical: 16,
    backgroundColor: Colors.blue,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.black,
    height: 40,
    paddingVertical: 4,
    margin: "auto",
    borderRadius: 6,
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: "LeagueSpartan-Bold",
    textAlign: "center",
    color: Colors.white,
  },
});

export default Login;
