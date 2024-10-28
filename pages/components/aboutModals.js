import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const AboutModals = ({ property, style }) => {
  // State to determine if the info is shown or hidden
  const [showInfo, setShowInfo] = useState(false);

  // Shared values for animations
  const imageOffset = useSharedValue(0);
  const infoOffset = useSharedValue(300); // Hidden initially

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
    imageOffset.value = withTiming(showInfo ? 0 : -300);
    infoOffset.value = withTiming(showInfo ? 300 : 0);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleModal}>
      <View style={[styles.modal, style]}>
        <Animated.View style={[styles.modalPic, imageStyle]}>
          <Image
            source={property.pic}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.infoContainer, infoStyle]}>
          {property.logo && (
            <Image
              source={property.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300,
    height: 160,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  modalPic: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

export default AboutModals;
