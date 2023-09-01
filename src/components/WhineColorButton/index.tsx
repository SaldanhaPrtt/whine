import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';

import styles from './styles';
import { LinearGradient } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WhineColorButton({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WhineColor')}
      >
        <Text style={styles.text}>Whine Color</Text>
      </TouchableOpacity>
    </View>
  );
}