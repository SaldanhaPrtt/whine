import React from 'react';
import { Svg, Path, Mask, G, Circle } from 'react-native-svg';

export default function PlusIcon() {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Circle 
        cx="10"
        cy="10"
        r="10"
        fill="rgba(76, 0, 0, 0.9)"
      />
      <Path 
        x="2"
        y="2"
        d="M12.75 7.75H2.75M7.75 2.75V12.75"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}






