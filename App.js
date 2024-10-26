import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Colors from "./style/colors";
import { LinearGradient } from "expo-linear-gradient";

import EnterPage from "./pages/enter";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Enter");
  const pageRender = () => {
    switch (currentPage) {
      case "Enter":
        return <EnterPage setCurrentPage={setCurrentPage} />;
      case "Login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case "Dashboard":
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case "About Us":
        return <AboutUs />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <View
      source={require("./assets/dashboardPics/background.png")} // Local image
      style={styles.mainContainer}
      resizeMode="cover" // Optional, to control how the image is scaled
    >
      <StatusBar />
      {/* GRADIENT */}
      <LinearGradient
        colors={['white', "transparent"]}
        style={styles.gradient}
      />

      {pageRender()}
      {/* <Button title="Login" onPress={() => setCurrentPage("Login")}></Button>
      <Button
        title="Dashboard"
        onPress={() => setCurrentPage("Dashboard")}
      ></Button>
      <Button
        title="About Us"
        onPress={() => setCurrentPage("About Us")}
      ></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "42%",
  },
});
