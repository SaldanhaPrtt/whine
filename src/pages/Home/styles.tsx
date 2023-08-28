import { StyleSheet, Platform } from "react-native";

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // paddingHorizontal: 20,
        // flexDirection: 'row',
        paddingHorizontal: 10,
    },
    bgImage: {
        flex: 1,
        width: width,
    },
    scrollWrapper: {
        // flex: 1,
        // backgroundColor: 'black',
        // marginTop: 100,
        width: '100%',
        height: 100,
        // flexDirection: 'row',
    },
    squareWrapper: {
        // flex: 1,
        // backgroundColor: 'black',
        // marginTop: 100,
        width: '100%',
        height: 100,
        // flexDirection: 'row',
    },
});

export default styles;