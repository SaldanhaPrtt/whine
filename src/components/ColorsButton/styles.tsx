import { StyleSheet, Dimensions } from 'react-native';
import normalize from 'react-native-normalize';

//Reds:
// Original: rgba(76, 0, 0, 0.9)
// #960018
// #800000
// #7C0A02
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(150, 0, 24, 1)',
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: 'rgba(246, 246, 246, 1)',
    shadowColor: 'rgba(200, 200, 200, 1)',
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
  },
  label: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Medium',
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
    resizeMode: 'contain',
    tintColor: 'rgba(255, 255, 255, 1)',
  },
});

export default styles;