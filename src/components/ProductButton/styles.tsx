import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    width: normalize(160),
    height: normalize(220),
    // backgroundColor: 'rgba(102, 0, 0, 1)', //660000
    backgroundColor: 'rgb(246, 246, 246)',
    borderRadius: 18,
    padding: normalize(20),
  },
  label: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 18,
    fontFamily: 'Raleway-SemiBold',
  },
  itemsView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold',
  },
  oldPrice: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    textDecorationLine: 'line-through',
  },
  image: {
    width: normalize(120),
    height: normalize(120),
  },
  lowerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: normalize(10),
  },
  pricesView: {
    width: '50%',
  },
  button: {
    backgroundColor: 'rgba(76, 0, 0, 0.9)',
    height: normalize(32),
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
});

export default styles;