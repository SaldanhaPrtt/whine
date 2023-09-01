import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width-20,
    height: 100,
    marginBottom: 20,
    backgroundColor: 'rgba(76, 0, 0, 0.9)',
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Gotham-Light',
    color: 'white',
    alignSelf: 'center',
  }
});

export default styles;