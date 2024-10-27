import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import Colors from "../../style/colors";
import { useFonts } from "expo-font";
import {
  useSharedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const Login = ({ setCurrentPage, style }) => {
  //ANIMATIONNNNN
  const opacityBegone = useSharedValue(1);
  useEffect(() => {
    opacityBegone.value = withDelay(0, withTiming(0, { duration: 200 }));
  }, []);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityBegone.value,
    };
  });

  // FONTSSSSS
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Bold": require("../../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueGothic-Regular": require("../../assets/fonts/LeagueGothic-Regular.ttf"),
  });
  if (!fontsLoaded) return null; // Return null instead of undefined

  //ANIMATION

  return (
    <Animated.View style={[styles.container, style, opacityStyle]}>
      {/* MOON */}
      <Image
        source={require("../../assets/images/MOON 90.png")}
        style={[styles.moonImage]}
      />

      <View style={styles.title}>
        <Text style={[styles.astro]}>ASTRO</Text>
        <Text style={[styles.infinity]}>
          <Text>"To </Text>
          <Text style={styles.colorBlue}>Infinity </Text>
          <Text>and </Text>
          <Text style={styles.colorBlue}>Beyond"</Text>
        </Text>
        <Image
          source={require("../../assets/images/sitAstro.png")}
          style={[styles.sitAstro]}
        />
      </View>

      {/* BUTTONS */}
      <TouchableHighlight
        style={[styles.button, styles.btn1]}
        onPress={() => setCurrentPage("Login")}
        underlayColor={Colors.medium}
      >
        <Text style={[styles.ButtonText, styles.btn1Text]}>Log In</Text>
      </TouchableHighlight>
      {/* 2nd BUTTON */}
      <TouchableHighlight
        style={[styles.button, styles.btn2]}
        onPress={() => setCurrentPage("Enter")}
        underlayColor={Colors.medium}
      >
        <Text style={[styles.ButtonText, styles.btn2Text]}>About Us</Text>
      </TouchableHighlight>

      {/* InputField */}
      <View style={[styles.inputTextContainer]}>
        <View style={styles.iconTextContainer}>
          <Image
            source={require("../../assets/images/UserLogo.png")}
            style={[styles.icon, styles.userIcon]}
          />
          <TextInput style={styles.inputText} placeholder="Email" />
        </View>
        <View style={styles.iconTextContainer}>
          <Image
            source={require("../../assets/images/LockLogo.png")}
            style={[styles.icon, styles.lockIcon]}
          />
          <TextInput style={styles.inputText} placeholder="Password" />
          <Image
            source={require("../../assets/images/EyeOffLogo.png")}
            style={[styles.icon, styles.eyeIcon]}
          />
        </View>
        <Text style={styles.forgot}>Forgot Password</Text>
        {/* Button */}
        <TouchableHighlight
          style={[styles.loginButton]}
          onPress={() => setCurrentPage("Dashboard")}
          underlayColor={Colors.medium}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  moonImage: {
    position: "absolute",
    bottom: 461.5,
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
