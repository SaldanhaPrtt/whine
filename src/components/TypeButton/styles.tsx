import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(76, 0, 0, 0.9)', //660000
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: 'rgba(255, 255, 255, 1)',
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
  },
  label: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Gotham-Medium',
  },
});

export default styles;