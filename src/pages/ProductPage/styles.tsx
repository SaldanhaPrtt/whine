import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  upperContainer: {
    top: 0,
    width: normalize(width),
    height: normalize(400),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  lowerContainer: {
    width: normalize(width),
    height: normalize(400),
    bottom: 0,
    backgroundColor: "rgba(236,236,236, 1)",
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    paddingHorizontal: normalize(40),
    alignItems: "center",
    position: "absolute",
  },
  lowerContainerHeader: {
    width: normalize(width),
    height: normalize(100),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: normalize(40),
  },
  label: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium"
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
    width: normalize(200, 'width'),
    height: normalize(240, 'height'),
  },
  pricesView: {
    alignItems: "center"
  },
  addMinusView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  descriptionContainer: {
    width: normalize(width),
    height: normalize(160),
    bottom: 0,
    backgroundColor: "rgba(236,236,236, 1)",
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: normalize(40),
  },
  descriptionTitle: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium"
  },
  descriptionText: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Gotham-Medium"
  },
  quantity: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium",
    marginHorizontal: normalize(10)
  },
  labelView: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default styles;