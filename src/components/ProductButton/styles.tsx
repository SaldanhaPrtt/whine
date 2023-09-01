import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 176,
    height: 229,
    // backgroundColor: 'rgba(102, 0, 0, 1)', //660000
    backgroundColor: '#F6F6F6',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'rgba(200, 200, 200, 0.8)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Light',
  },
  price: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Bold',
  },
  oldPrice: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Light',
    textDecorationLine: 'line-through',
  },
  image: {
    width: 85,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 5,
    borderRadius: 6,
  },
  pricesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;