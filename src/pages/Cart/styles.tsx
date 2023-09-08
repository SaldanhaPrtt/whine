import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        rowGap: normalize(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: normalize(90),
    },
    image: {
        width: normalize(50),
        height: normalize(70),
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
        color: 'rgba(76, 0, 0, 0.9)'
    },
    price: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: 'rgba(76, 0, 0, 0.9)'
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: normalize(20),
    },
    counter: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginHorizontal: normalize(20),
    },
    itemContainer: {
        height: normalize(100),
        width: normalize(330),
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        borderRadius: normalize(10),
    },
    emptyText: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: 'rgba(76, 0, 0, 0.9)'
    },
});

export default styles;