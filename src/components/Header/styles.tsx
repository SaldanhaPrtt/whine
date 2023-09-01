import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
    // height: 90,
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
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
