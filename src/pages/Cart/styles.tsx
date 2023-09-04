import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: normalize(100),
        height: normalize(100),
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
    },
    price: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        marginBottom: normalize(10),
    },
    oldPrice: {
        fontSize: normalize(16),
        textDecorationLine: 'line-through',
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginHorizontal: normalize(20),
    },
});

export default styles;