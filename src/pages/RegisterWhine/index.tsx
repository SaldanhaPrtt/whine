import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

import styles from './styles';
import Header from '../../components/Header';
import CircleButton from '../../components/TypeButton';
import { insertWine } from '../../services/SQLite/Wines';
import { Button, TextInput, Checkbox } from 'react-native-paper';
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite';
import Toast from 'react-native-toast-message';

type Wine = {
  name: string;
  price: number;
  oldPrice?: number;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  picture: string;
};

export default function RegisterWhine({navigation, route}: {navigation: any, route: any}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('')
  const [year, setYear] = useState('');
  const [grapes, setGrapes] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      includeBase64: true,
    },
  };

  const handleChoosePhoto = (mode: string) => {
    if (mode !== 'camera') {
      ImagePicker.launchImageLibrary(options as any, (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          setPicture(response.uri);
        }
      });
    } else {
      ImagePicker.launchCamera(options as any, (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          setPicture(response.uri);
        }
      });
    }
  };

  const handleRegister =  async () => {
    if(name && price && oldPrice && year && grapes && country && region && description && picture) {
    const db = await getDatabase();
    const wine: Wine = {
      name: name,
      price: parseFloat(price),
      oldPrice: parseFloat(oldPrice),
      year: year,
      grapes: grapes,
      country: country,
      region: region,
      description: description,
      picture: picture,
    };
    await closeDatabase(db as any);
    await insertWine(db, wine);
  } else {
    Toast.show({
      type: 'error',
      text1: 'Campos imcompletos',
    });
  }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Whine</Text>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(text) => setPrice(text)}
          value={price}
          placeholder="Preço"
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(text) => setOldPrice(text)}
          value={oldPrice}
          placeholder="Preço Antigo"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Descrição"
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(text) => setYear(text)}
          value={year}
          placeholder="Ano"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGrapes(text)}
          value={grapes}
          placeholder="Uva(s)"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCountry(text)}
          value={country}
          placeholder="País"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRegion(text)}
          value={region}
          placeholder="Região"
        />
        <Pressable style={styles.button} onPress={() => handleChoosePhoto('library')}>
          <Text style={styles.buttonText}>Escolher Imagem</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleChoosePhoto('camera')}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </Pressable>
        <Button mode="contained" onPress={handleRegister}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
}
