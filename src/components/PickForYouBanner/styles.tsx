import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width-20,
    height: 100,
    backgroundColor: 'rgba(76, 0, 0, 0.9)',
    borderRadius: 10,
    textAlignVertical: 'center',
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