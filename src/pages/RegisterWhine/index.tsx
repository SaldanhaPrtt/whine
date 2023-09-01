import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

import styles from './styles';
import Header from '../../components/Header';
import CircleButton from '../../components/TypeButton';

export default function RegisterWhine({navigation, route}: {navigation: any, route: any}) {
  const [image, setImage] = React.useState<any>(null);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary(options as any, (response: any) => {
      console.log('Response = ', response);

      if (response.uri) {
        setImage(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Register Whine</Text>
      <View style={styles.inputContainer}>
      <CircleButton
            text="+"
            color="#FFC700"
            onPress={() => navigation.navigate('RegisterWhine')}
          />
          <CircleButton
            text="P"
            color="#FFC700"
            onPress={() => navigation.navigate('Profile')}
          />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Description"
        />
        <Pressable style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </Pressable>
      </View>
    </View>
  );
}
