import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

import styles from './styles';
import Header from '../../components/Header';
import CircleButton from '../../components/TypeButton';
import { insertWine } from '../../services/SQLite/Wines';
import { Button, TextInput } from 'react-native-paper';
import { getDatabase } from '../../services/SQLite/SQLite';

type Wine = {
  name: string;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  picture: string;
};

export default function RegisterWhine({navigation, route}: {navigation: any, route: any}) {
  const [name, setName] = useState('');
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
    },
  };

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary(options as any, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        setPicture(response.uri);
      }
    });
  };

  const handleRegister = () => {
    const db = getDatabase();
    const wine: Wine = {
      name,
      year,
      grapes,
      country,
      region,
      description,
      picture,
    };
    insertWine(db, wine);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Whine</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Description"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setYear(text)}
          value={year}
          placeholder="Year"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGrapes(text)}
          value={grapes}
          placeholder="Grapes"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCountry(text)}
          value={country}
          placeholder="Country"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRegion(text)}
          value={region}
          placeholder="Region"
        />
        <Pressable style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </Pressable>
        <Button mode="contained" onPress={() => {handleRegister}}>
          Register
        </Button>
      </View>
    </View>
  );
}
