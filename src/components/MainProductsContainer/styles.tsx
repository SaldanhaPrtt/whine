import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: '#FFF',
  },
  scrollView: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: normalize(10),
    marginHorizontal: 20,
  },
});

export default styles;