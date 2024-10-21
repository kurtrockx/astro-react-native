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
  const [fontsLoaded] = useFonts({
    "NixieOne-Regular": require("../assets/fonts/NixieOne-Regular.ttf"),
  });
  if (!fontsLoaded) return;

  //animation
  const translateY = useSharedValue(-500); // Start off-screen higher

  useEffect(() => {
    // Animate with spring to create a bounce effect
    translateY.value = withSpring(0, {
      damping: 18,
      stiffness: 120,
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
      {/* moon */}
      <Image
        source={require("../assets/images/moon.png")}
        style={styles.moonImage}
      />

      {/* title */}
      <View style={styles.loginTitle}>
        <Text style={styles.astWhite}>AST</Text>
        <Text style={styles.roLight}>RO</Text>
        <Animated.View style={[styles.astronautContainer, animatedStyle]}>
          <Image
            source={require("../assets/images/sitAstro.png")}
            style={styles.astronaut}
          />
        </Animated.View>
      </View>

      {/* container input */}
      <View style={styles.mainContent}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/UserLogo.png")}
            style={styles.logo}
          />
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/LockLogo.png")}
            style={styles.logo}
          />
          <TextInput style={styles.input2} placeholder="Password" />
          <Image
            source={require("../assets/images/EyeOffLogo.png")}
            style={[styles.logo, styles.eyeLogo]}
          />
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableHighlight
        style={styles.loginButton}
        onPress={() => setCurrentPage("Dashboard")}
        underlayColor={Colors.medium} // Background color when pressed
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
  // login
  loginTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  astWhite: {
    position: "relative",
    top: -35,
    fontFamily: "NixieOne-Regular",
    fontSize: 75,
    color: Colors.light,
  },
  roLight: {
    fontFamily: "NixieOne-Regular",
    fontSize: 75,
    color: Colors.medium,
  },
  astronaut: {
    width: 180,
    height: 180,
  },
  astronautContainer: {
    position: "absolute",
    zIndex: 1000,
    bottom: -90,
  },
  // inputContainer
  mainContent: {
    marginVertical: 35,
    width: 275,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    rowGap: 10,
  },
  inputContainer: {
    backgroundColor: "red",
    width: "100%",
    height: 50,
    backgroundColor: Colors.medium,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  input: {
    width: 240, //length of character inputs
    fontSize: 16,
  },
  input2: {
    width: 210, //length of character inputs
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
    backgroundColor: Colors.medium,
    borderWidth: 1,
    borderColor: "white",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  // moon
  moonImage: {
    position: 'absolute',
    transform: [{translateY: 360}],
    width: 360,
    height: 360,
  },
});

export default Login;
