import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(20),
    marginTop: normalize(10),
    width: "100%",
    height: normalize(60, 'height'),
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
  pressable: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
