import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 120,
    backgroundColor: 'rgba(102, 0, 0, 1)', //660000
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    shadowColor: 'rgba(255, 255, 255, 1)',
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
  },
  label: {
    color: 'rgba(200, 200, 200, 0.8)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Light',
  },
  price: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
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
    width: 60,
    marginBottom: 5,
    borderRadius: 8,
  },
});

export default styles;