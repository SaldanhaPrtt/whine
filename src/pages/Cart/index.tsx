import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';

interface Props {
  label: string;
  price: string;
  oldPrice: string;
  image: any;
}

const CartItem = ({ label, price, oldPrice, image }: Props) => {
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.oldPrice}>{oldPrice}</Text>
        </View>
        <View style={styles.counterContainer}>
            <MinusIcon />
            <Text style={styles.counter}>1</Text>
            <PlusIcon />
        </View>
        </View>
    );
    }


export default function Cart({ label, price, oldPrice, image }: Props) {
    return (
        <View style={styles.container}>

        </View>
    );
};