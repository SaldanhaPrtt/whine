import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import wine_png from '../../assets/PNG/wine_png.png';

const CartItem = () => {
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={wine_png} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.label}>{"label"}</Text>
            <Text style={styles.price}>{"price"}</Text>
            <Text style={styles.oldPrice}>{"oldPrice"}</Text>
        </View>
        <View style={styles.counterContainer}>
            <MinusIcon />
            <Text style={styles.counter}>1</Text>
            <PlusIcon />
        </View>
        </View>
    );
    }


export default function Cart({ navigation, route }: any) {
    return (
        <View style={styles.container}>

        </View>
    );
};