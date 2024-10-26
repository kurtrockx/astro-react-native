import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../style/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const CustomSizedModal = ({ property }) => {
  // State to determine if the info is shown or hidden
  const [showInfo, setShowInfo] = useState(false);

  // Shared values for animations
  const imageOffset = useSharedValue(0);
  const infoOffset = useSharedValue(100); // Hidden initially

  // Animation styles for the image
  const imageStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: imageOffset.value }],
  }));

  // Animation styles for the info
  const infoStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: infoOffset.value }],
  }));

  // Toggle function for the modal
  const toggleModal = () => {
    setShowInfo(!showInfo);
    imageOffset.value = withTiming(showInfo ? 0 : -90);
    infoOffset.value = withTiming(showInfo ? 90 : 0);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleModal}>
      <View style={styles.modal}>
        <Animated.View style={[styles.modalPic, imageStyle]}>
          <Image
            source={property.pic}
            style={styles.image}
            resizeMode="cover"
          />
        </Animated.View>
        <Animated.View style={[styles.infoContainer, infoStyle]}>
          <LinearGradient
            colors={["#344966", "#0D1821"]}
            style={styles.gradient}
            start={[0.5, 1]}
            end={[0.5, 0.1]}
          >
            {property.logo && (
              <Image
                source={property.logo}
                style={{
                  width: "30%",
                  height: "30%",
                  marginHorizontal: "auto",
                  marginTop: 4,
                }}
                resizeMode="center"
              />
            )}
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>{property.desc}</Text>
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  modalPic: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Colors.heaviest", // Semi-transparent background for the info
  },
  infoText: {
    fontSize: 7.5,
    color: "white",
    textAlign: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
  infoTextContainer: {
    flex: 1,
    padding: 5,
  },
});

export default CustomSizedModal;
