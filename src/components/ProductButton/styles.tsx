import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    width: normalize(160),
    height: normalize(200),
    // backgroundColor: 'rgba(102, 0, 0, 1)', //660000
    backgroundColor: '#F6F6F6',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Light',
  },
  price: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Bold',
  },
  oldPrice: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Light',
    textDecorationLine: 'line-through',
  },
  image: {
    width: normalize(60),
    height: normalize(120),
  },
  lowerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  pricesView: {
    alignItems: 'center',
  },
  plusIconView: {
  },
});

export default styles;