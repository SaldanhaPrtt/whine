import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    top: 0,
    width: "100%",
    // height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50
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
