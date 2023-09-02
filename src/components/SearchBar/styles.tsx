import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    verticalAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(30),
    width: '100%',
  },
  searchBar: {
    // backgroundColor: 'rgba(76, 0, 0, 0.9)',
    width: normalize(300),
    borderRadius: 10,
    height: normalize(48),
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 8,
  },
});

export default styles;