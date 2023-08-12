import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(102 0, 0, 0.7)', //660000
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
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
    lineHeight: 40,
  },
});

export default styles;