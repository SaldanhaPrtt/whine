import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    width: normalize(160),
    height: normalize(220),
    // backgroundColor: 'rgba(102, 0, 0, 1)', //660000
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    padding: normalize(20),
  },
  label: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Gotham-Book',
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
    textAlign: 'center',
    fontFamily: 'Gotham-Medium',
  },
  oldPrice: {
    color: 'rgba(76, 0, 0, 0.9)',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Gotham-XLight',
    textDecorationLine: 'line-through',
  },
  image: {
    width: normalize(120),
    height: normalize(120),
  },
  lowerView: {
    marginTop: normalize(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    width: '100%',
  },
  pricesView: {
    alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  plusIconView: {
  },
});

export default styles;