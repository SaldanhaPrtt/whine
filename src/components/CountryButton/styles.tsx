import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

//Reds:
// Original: rgba(76, 0, 0, 0.9)
// #960018
// #800000
// #7C0A02
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(150, 0, 24, 1)',
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
  },
  innerContainer: {
    justifyContent: 'space-between',
  },
  label: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Medium',
    marginTop: 10,
  },
  flag: {
    borderRadius: 8
  }
});

export default styles;