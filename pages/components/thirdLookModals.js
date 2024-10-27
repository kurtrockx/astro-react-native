import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const thirdLookModals = ({ property }) => {
  return (
    <View style={styles.modal}>
      {property.logo && (
        <Image
          source={property.logo}
          style={{
            width: "100%",
            height: "100%",
            marginHorizontal: "auto",
            marginTop: 4,
          }}
          resizeMode="center"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 160,
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
  logo: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "Colors.heaviest",
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

export default thirdLookModals;
