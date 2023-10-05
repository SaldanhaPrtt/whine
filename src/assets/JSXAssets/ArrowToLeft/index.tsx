import React from 'react';
import { View } from 'react-native'
import { Svg, Path, Mask, G } from 'react-native-svg';

export default function ArrowToLeft() {
  return (
    <View style={{transform: [{rotate: '180deg'}]}}>
      <Svg
        width="36"
        height="36"
        fill="rgba(76, 0, 0, 0.9)"
        viewBox="0 0 330 330"
      >
        <Path d="M165 0C74.019 0 0 74.019 0 165s74.019 165 165 165 165-74.019 165-165S255.981 0 165 0zm60.606 175.605l-80 80.002C142.678 258.535 138.839 260 135 260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355 0-21.213l69.393-69.396-69.393-69.392c-5.858-5.857-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l80 79.998a14.996 14.996 0 01-.001 21.215z"></Path>
      </Svg>
    </View>
  );
}







