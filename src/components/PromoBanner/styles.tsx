import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width-20,
    height: 100,
    marginBottom: 20,
    backgroundColor: '#220000',
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 20,
  },
});

export default styles;