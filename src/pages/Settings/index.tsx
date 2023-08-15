import React from 'react';
import { View, Text } from 'react-native';
import SquareButton from '../../components/SquareButton';

export default function Settings() {
  return (
    <View>
      <Text>SETTINGS</Text>
      <SquareButton text="Test" color="red" />
    </View>
  );
}