import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";

import Colors from "./style/colors";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import AboutUs from "./pages/aboutUs";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  const pageRender = () => {
    switch (currentPage) {
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
    <ImageBackground
      source={require("./assets/dashboardPics/background.png")} // Local image
      style={styles.mainContainer}
      resizeMode="cover" // Optional, to control how the image is scaled
    >
      <StatusBar />

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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
