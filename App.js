import React, { useState, Suspense, lazy } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Colors from "./style/colors";
import { LinearGradient } from "expo-linear-gradient";

const EnterPage = lazy(() => import("./pages/enter"));
const LoginPage = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const AboutUs = lazy(() => import("./pages/aboutUs"));

export default function App() {
  const [currentPage, setCurrentPage] = useState("AboutUs");

  const pageRender = () => {
    switch (currentPage) {
      case "Enter":
        return <EnterPage setCurrentPage={setCurrentPage} />;
      case "Login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case "Dashboard":
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case "AboutUs":
        return <AboutUs setCurrentPage={setCurrentPage} />;
      default:
        return <EnterPage />;
    }
  };
  

  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      <Suspense fallback={<Text>Loading...</Text>}>{pageRender()}</Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
