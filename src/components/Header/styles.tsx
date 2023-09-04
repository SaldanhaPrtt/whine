import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    // marginTop: normalize(40),
    paddingHorizontal: normalize(20),
    width: "100%",
    // height: 90,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 30,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 5,
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
