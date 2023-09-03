import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lowerContainer: {
    width: normalize(width),
    height: normalize(480),
    bottom: 0,
    backgroundColor: "rgba(246,246,246, 1)",
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  label: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Gotham-Light"
  },
  price: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Gotham-Bold"
  },
  oldPrice: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Gotham-Light",
    textDecorationLine: "line-through"
  },
  image: {
    width: normalize(60, 'width'),
    height: normalize(120, 'height'),
  },
  lowerView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  pricesView: {
    alignItems: "center"
  },
  plusIconView: {}
});

export default styles;