import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import { Button } from 'react-native-paper'
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite'
import { createWinesTable } from '../../services/SQLite/Wines'
import MainLogo from '../../assets/PNG/MainLogo.jpg'
import { useUser } from '../../contexts/user'

export default function Login({ route, navigation }: any) {
  const { setUserContext }: any = useUser()

  const handlePress = async () => {
    await setUserContext({
      name: 'Teste',
      age: 18,
      dateOfBirth: '01/01/2000',
      cpf: '12345678900',
      email: '',
      role: 'admin',
      clientType: 'premium',
    })

    const db = await getDatabase();
    await createWinesTable(db);
    await closeDatabase(db as any);
    await navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={MainLogo} style={styles.image}/>
      <Button
        textColor='rgba(76, 0, 0, 0.9)'
        buttonColor='#FFF' 
        rippleColor='rgba(76, 0, 0, 0.9)'
        mode='outlined'
        onPress={handlePress}
        style={styles.button}
        contentStyle={{height: 60, width: 120}}
      >
        Entrar
      </Button>
    </View>
  )
}