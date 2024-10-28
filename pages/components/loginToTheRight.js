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

const LoginToTheRight = ({ setCurrentPage, style }) => {
  //ANIMATIONNNNN
  const opacityBegone = useSharedValue(1);
  useEffect(() => {
    opacityBegone.value = withDelay(0, withTiming(0, { duration: 400 }));
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
      <Animated.Image
        source={require("../../assets/images/MOON 90.png")}
        style={[styles.moonImage, opacityStyle]}
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
        <View style={styles.borderInput}>
          <View style={styles.iconTextContainer}>
            <Image
              source={require("../../assets/images/UserLogo.png")}
              style={[styles.icon, styles.userIcon]}
              resizeMode="contain"
            />
            <TextInput style={styles.inputText} placeholder="Email" />
          </View>
          <View style={styles.iconTextContainer}>
            <Image
              source={require("../../assets/images/LockLogo.png")}
              style={[styles.icon, styles.lockIcon]}
              resizeMode="contain"
            />
            <TextInput style={styles.inputText} placeholder="Password" />
            <Image
              source={require("../../assets/images/EyeOffLogo.png")}
              style={[styles.icon, styles.eyeIcon]}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.forgot}>Forgot Password</Text>
        </View>
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
    backgroundColor: Colors.lightBlue,
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
    backgroundColor: Colors.black,
    width: "100%",
    height: 40,
    paddingVertical: 4,
    margin: "auto",
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: "LeagueSpartan-Bold",
    textAlign: "center",
    color: Colors.white,
  },
});

export default LoginToTheRight;
