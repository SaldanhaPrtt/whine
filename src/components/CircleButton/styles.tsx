import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(102 0, 0, 0.7)', //660000
    width: 90,
    height: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    shadowColor: 'rgba(255, 255, 255, 0.4)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
  },
  label: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;