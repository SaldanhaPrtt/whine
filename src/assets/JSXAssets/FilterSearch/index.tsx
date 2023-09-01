import React from 'react';
import { Svg, Path, Mask, G } from 'react-native-svg';

export default function BagIcon() {
  return (
    <Svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none"
    >
        <Path d="M29.9998 10.4999H16.4998M20.9998 25.4999H7.49976" 
            stroke="white" 
            stroke-width="2.75385" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
        <Path d="M25.4998 29.9999C27.985 29.9999 29.9998 27.9852 29.9998 25.4999C29.9998 23.0146 27.985 20.9999 25.4998 20.9999C23.0145 20.9999 20.9998 23.0146 20.9998 25.4999C20.9998 27.9852 23.0145 29.9999 25.4998 29.9999Z" 
            stroke="white" 
            stroke-width="2.75385" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
        <Path d="M10.5 14.9999C12.9853 14.9999 15 12.9852 15 10.4999C15 8.01466 12.9853 5.99994 10.5 5.99994C8.01472 5.99994 6 8.01466 6 10.4999C6 12.9852 8.01472 14.9999 10.5 14.9999Z" 
            stroke="white" 
            stroke-width="2.75385" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        />
    </Svg>
  );
}