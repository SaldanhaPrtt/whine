import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.8,
    },
    scrollWrapper: {
        backgroundColor: 'red',
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: 'red',
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    });

export default styles;