import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width-20,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;