import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    top: 0,
    height: normalize(350),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255, 1)",
  },
  lowerContainer: {
    height: normalize(200),
    bottom: 0,
    // backgroundColor: "rgba(236,236,236, 1)",
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    paddingHorizontal: normalize(30),
    alignItems: "center",
    // position: "absolute",
  },
  lowerContainerHeader: {
    width: `100%`,
    height: normalize(100),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium"
  },
  price: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium"
  },
  oldPrice: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Gotham-Medium",
    textDecorationLine: "line-through"
  },
  image: {
    width: normalize(200, 'width'),
    height: normalize(240, 'height'),
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pricesView: {
    alignItems: "center"
  },
  addMinusView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  descriptionContainer: {
    width: `100%`,
    height: normalize(160),
    bottom: 0,
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  descriptionTitle: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium",
  },
  descriptionText: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Gotham-Book",
  },
  quantity: {
    color: "rgba(76, 0, 0, 0.9)",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Gotham-Medium",
    marginHorizontal: normalize(10),
    width: normalize(40),
  },
  labelView: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  detailsContaienr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: normalize(width),
  },
});

export default styles;