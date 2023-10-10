import { StyleSheet, Platform } from "react-native";

import { Dimensions } from 'react-native';
import normalize from "react-native-normalize";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // paddingHorizontal: 20,
        // flexDirection: 'row',
        // paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(20),
    },
    searchWrapper: {
        width: '100%',
        marginBottom: normalize(40),
    },
    countriesWrapper: {
        width: '100%',
    },
    colorsWrapper: {
        width: '100%',
    },
});

export default styles;