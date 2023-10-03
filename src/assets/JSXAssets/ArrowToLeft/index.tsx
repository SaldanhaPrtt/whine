import React from 'react';
import { View } from 'react-native';
import { Svg, Path, Mask, G } from 'react-native-svg';

export default function ArrowToLeft() {
  return (
    <View style={{width: 30, height: 30, borderRadius: 20, backgroundColor: 'rgba(76, 0, 0, 0.9)', alignItems: 'center', justifyContent: 'center'}}>
      <Svg width="27" height="27" viewBox="0 0 27 27" fill="rgba(76, 0, 0, 0.9)">
        <Path d="M17.2211 6.05768L9.77881 13.5L17.2211 20.9423" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    </View>
  );
}







