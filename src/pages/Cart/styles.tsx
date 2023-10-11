import { Dimensions, StyleSheet } from 'react-native';
import normalize, { SCREEN_WIDTH } from 'react-native-normalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        width: Dimensions.get('window').width,
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    leftItemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: normalize(200, 'width')
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
        paddingHorizontal: normalize(10)
    },
    emptyText: {
        marginTop: normalize(60),
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: 'rgba(76, 0, 0, 0.9)'
    },
    infosContainer: {
        height: normalize(100),
        width: normalize(SCREEN_WIDTH),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        bottom: 60,
    },
    totalText: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: 'rgba(76, 0, 0, 0.9)',
        fontFamily: 'Gotham-Light',
    },
    address: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        marginBottom: normalize(10),
        color: 'rgba(76, 0, 0, 0.9)'
    },
    addressContainer: {
        height: normalize(100),
        width: normalize(330),
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        borderRadius: normalize(10),
    },
    button: {
        height: normalize(32, 'height'),
        width: normalize(36, 'width'),
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default styles;