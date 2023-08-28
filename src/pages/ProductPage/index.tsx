import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ProductPage({navigation, route}: {navigation: any, route: any}) {
    return (
        <View style={styles.container}>
        <Text style={styles.label}>Produtos</Text>
        </View>
    );
}