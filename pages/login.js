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
import {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Login = ({ setCurrentPage }) => {
  const translateY = useSharedValue(-500); // Start off-screen higher

  useEffect(() => {
    // Animate with spring to create a bounce effect
    translateY.value = withSpring(0, {
      damping: 18,
      stiffness: 150,
    });
  }, []);

  // Create an animated style based on the shared value
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      {/* circles */}
      <View style={[styles.circle, styles.c1]}>
        <View style={[styles.lineAcross, styles.la1]} />
      </View>
      <View style={[styles.circle, styles.c2]} />
      <View style={[styles.circle, styles.c3]}>
        <View style={styles.c5} />
        <View style={[styles.lineAcross, styles.la2]} />
      </View>
      <View style={[styles.circle, styles.c4]} />

      {/* title */}
      <View style={styles.loginTitle}>
        <Text style={styles.astr}>ASTR</Text>
        {/* Apply the animation and render the animated view */}
        <Animated.View style={[styles.astroCircle, animatedStyle]}>
          {/* Only keep the astroCircle inside Animated.View */}
          <View style={[styles.lineAcross, styles.la3]}>
            <View style={styles.string} />
          </View>
        </Animated.View>
      </View>

      {/* container input */}
      <View style={styles.mainContent}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/UserLogo.png")}
            style={styles.logo}
          />
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/LockLogo.png")}
            style={styles.logo}
          />
          <TextInput style={styles.input2} placeholder="Password" />
          <Image
            source={require("../assets/EyeOffLogo.png")}
            style={[styles.logo, styles.eyeLogo]}
          />
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableHighlight
        style={styles.loginButton}
        onPress={() => setCurrentPage("Dashboard")}
        underlayColor={Colors.mediumBlue} // Background color when pressed
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  c1: {
    top: -70,
    right: -28,
    backgroundColor: Colors.heavyBlue,
    zIndex: 10,
  },
  c2: {
    right: -110,
    top: 0,
    backgroundColor: Colors.lightBlue,
  },
  c3: {
    bottom: -20,
    left: -70,
    backgroundColor: Colors.lightBlue,
    zIndex: 10,
  },
  c4: {
    bottom: -90,
    left: 20,
    backgroundColor: Colors.heavyBlue,
  },
  c5: {
    position: "absolute",
    width: 35,
    height: 35,
    borderRadius: 100,
    top: 10,
    right: -30,
    backgroundColor: Colors.mediumBlue,
  },
  lineAcross: {
    position: "absolute",
    width: 260,
    height: 4,
    left: "50%",
    top: "50%",
    borderRadius: 20,
  },
  la1: {
    transform: [{ translateX: -130 }, { translateY: 5 }, { rotate: "160deg" }],
    backgroundColor: Colors.lightBlue,
  },
  la2: {
    width: 300,
    transform: [{ translateX: -130 }, { translateY: -5 }, { rotate: "160deg" }],
    backgroundColor: Colors.heavyBlue,
  },

  // login
  loginTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  astr: {
    fontSize: 46,
    color: "white",
  },
  astroCircle: {
    width: 36,
    height: 36,
    zIndex: 1,
    marginTop: 4,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: Colors.mediumBlue,
  },
  string: {
    position: "absolute",
    backgroundColor: "white",
    transform: [{ translateX: -42 }, { translateY: 6 }, { rotate: "20deg" }],
    zIndex: -1,
    width: 1,
    height: 400,
  },
  la3: {
    width: 60,
    height: 1,
    transform: [{ translateX: -30 }, { translateY: 0 }, { rotate: "160deg" }],
    backgroundColor: Colors.lightBlue,
  },

  // inputContainer
  mainContent: {
    marginVertical: 28,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: 10,
  },
  inputContainer: {
    width: 300,
    height: 50,
    backgroundColor: Colors.lightBlue,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  input: {
    width: 240,
    fontSize: 16,
  },
  input2: {
    width: 210,
    fontSize: 16,
  },
  logo: {
    height: 24,
    width: 24,
    margin: 10,
  },
  eyeLogo: {
    marginLeft: "auto",
  },
  forgot: {
    color: "white",
    alignSelf: "flex-end",
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationColor: "white",
  },
  loginButton: {
    paddingHorizontal: 46,
    paddingVertical: 8,
    borderRadius: 40,
    backgroundColor: Colors.lightBlue,
    borderWidth: 1,
    borderColor: "white",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
