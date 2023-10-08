import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import { Button } from 'react-native-paper'
import { useUser } from '../../contexts/user'
import DeliveryIcon from '../../assets/JSXAssets/DeliveryIcon'

export default function DeliveryModal({ navigation, route }: any) {
  const { user }: any = useUser();

  const handlePress = () => {
    navigation.navigate('Delivery')
  }

  return (
    <TouchableHighlight onPress={handlePress} style={styles.container}>
      <View>
        <DeliveryIcon />
        <Text style={styles.title}>Pedido</Text>
      </View>
    </TouchableHighlight>
  )
}