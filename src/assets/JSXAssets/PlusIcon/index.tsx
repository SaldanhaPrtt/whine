import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Path, Mask, G, Circle, Defs } from 'react-native-svg';

export default function ProductPlusIcon() {
  return (
    <View style={styles.container}>
    <Svg
      width="16"
      height="16"
      fill="#FFF"
      viewBox="0 0 45.402 45.402"
    >
      <Path d="M41.267 18.557H26.832V4.134A4.127 4.127 0 0022.707 0a4.126 4.126 0 00-4.124 4.135v14.432H4.141a4.137 4.137 0 00-4.138 4.135 4.143 4.143 0 001.207 2.934 4.122 4.122 0 002.92 1.222h14.453V41.27c0 1.142.453 2.176 1.201 2.922a4.11 4.11 0 002.919 1.211 4.13 4.13 0 004.129-4.133V26.857h14.435c2.283 0 4.134-1.867 4.133-4.15-.001-2.282-1.852-4.15-4.133-4.15z"></Path>
    </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 32,
        height: 32,
        backgroundColor: 'rgba(76, 0, 0, 0.9)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
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







