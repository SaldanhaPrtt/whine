import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useUser } from '../../contexts/user';

export default function Profile({navigation, route} : any) {
  const { user }: any = useUser();
  //Pedidos
  //Endereços
  //Dados pessoais
  //Sair
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Nome: {user.name}</Text>
      <Text>Idade: {user.age}</Text>
      <Text>Data de Nascimento: {user.dateOfBirth}</Text>
      <Text>CPF: {user.cpf}</Text>
      <Text>Email: {user.email}</Text>
      <Button mode='contained-tonal' onPress={() => navigation.navigate('RegisterWhine')}>Registrar Vinho</Button>
    </View>
  );
}