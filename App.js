import React, { useState, Suspense, lazy } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Colors from "./style/colors";
import { LinearGradient } from "expo-linear-gradient";

const EnterPage = lazy(() => import("./pages/enter"));
const LoginPage = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const AboutUs = lazy(() => import("./pages/aboutUs"));

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
    <View style={styles.mainContainer}>
      <StatusBar />
      {/* GRADIENT */}
      <LinearGradient
        colors={["white", "transparent"]}
        style={styles.gradient}
      />
      <Suspense fallback={<Text>Loading...</Text>}>{pageRender()}</Suspense>
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
