import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Path, Mask, G, Circle, Defs } from 'react-native-svg';

export default function MinusIcon() {
  return (
    <View style={styles.container}>
        <Svg
        width="40"
        height="40"
        viewBox="0 0 90 90"
        fill='rgba(76, 0, 0, 0.9)'
        >
        <Path
            d="M355 796c-107-34-186-102-232-201-24-51-28-73-28-145s4-94 28-146c130-282 522-281 654 1 24 51 28 73 28 145s-4 94-28 145c-30 65-81 124-138 160-78 50-199 68-284 41zm300-346v-25l-203-3c-174-2-203 0-208 13-4 8-4 22 0 30 5 13 34 15 208 13l203-3v-25z"
            transform="matrix(.1 0 0 -.1 0 90)"
            fill={'rgba(76, 0, 0, 0.9)'}
        ></Path>
        </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 32,
        height: 32,
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