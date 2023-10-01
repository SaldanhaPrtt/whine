import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Button } from 'react-native-paper'
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite'
import { createWinesTable } from '../../services/SQLite/Wines'
import MainLogo from '../../assets/PNG/MainLogo.jpg'

export default function Login({ route, navigation }: any) {
  const handlePress = async () => {
    const db = await getDatabase();
    await createWinesTable(db);
    await closeDatabase(db as any);
    await navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={MainLogo}/>
      <Button mode='contained' onPress={handlePress}>Entrar</Button>
    </View>
  )
}