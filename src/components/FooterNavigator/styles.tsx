import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

const styles = StyleSheet.create({
  container: {
    height: normalize(300, 'height'),
    width: "100%",
    marginHorizontal: 30,
    position: "absolute",
    bottom: normalize(100),
    zIndex: 100,
  },
  bar: {
    backgroundColor: 'rgba(76, 0, 0, 0.9)',
    borderRadius: 10,
    height: normalize(40, 'height'),
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
