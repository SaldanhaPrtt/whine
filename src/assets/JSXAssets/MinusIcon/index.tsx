import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Path, Mask, G, Circle, Defs } from 'react-native-svg';

export default function MinusIcon() {
  return (
    <Svg width={16} height={16} fill={'#FFF'} viewBox="0 0 256 256">
      <Path d="M223.2 105.2H32.8C20.3 105.2 10 115.4 10 128c0 12.6 10.3 22.8 22.8 22.8h190.3c12.6 0 22.8-10.3 22.8-22.8.1-12.6-10.2-22.8-22.7-22.8z"></Path>
    </Svg>
  )
}