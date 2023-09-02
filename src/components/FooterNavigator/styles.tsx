import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    marginHorizontal: 30,
    position: "absolute",
    bottom: 100,
    zIndex: 100,
  },
  bar: {
    backgroundColor: 'rgba(76, 0, 0, 0.9)',
    borderRadius: 10,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
