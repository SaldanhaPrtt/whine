import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import MainLogo from '../../assets/JSXAssets/MainLogo';
import ProfileIcon from '../../assets/JSXAssets/ProfileIcon';
import OptionsIcon from '../../assets/JSXAssets/OptionsIcon';
import BagIcon from '../../assets/JSXAssets/BagIcon';
import ArrowToLeft from '../../assets/JSXAssets/ArrowToLeft';
import styles from './styles';
import { List } from 'react-native-paper';
import LocationIcon from '../../assets/JSXAssets/LocationIcon';
import ProductPlusIcon from '../../assets/JSXAssets/PlusIcon';

type HeaderProps = {
  navigation: any;
  route: any;
};

export default function Header({navigation, route}: {navigation: any, route: any}) {
  const handleLeftButton = () => {
    if (route.name === 'Home') {
      navigation.navigate('Profile');
    } else {
      navigation.goBack();
    } 
  }

  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>();
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      {route.name === 'Login' ? <View /> : (
        <>
          <View style={styles.logoContainer}>
            <Pressable onPress={handleLeftButton} style={styles.pressable}>
              {route.name === 'Home' ? <OptionsIcon /> : <ArrowToLeft />}
            </Pressable>
          </View>
          <View style={styles.addressView}>
            <List.Accordion
              rippleColor={"rgba(255, 255, 255, 0.2)"}
              style={styles.list}
              title={selectedItem ? selectedItem : "Selecionar Local"}
              left={() => <LocationIcon />}
              right={() => <View />}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item
                title="First item"
                style={styles.listItem}
                right={() => <View />}
                onPress={() => setSelectedItem('First Item')}
              />
              <List.Item
                title="Second item"
                style={styles.listItem}
                right={() => <View />}
                onPress={() => setSelectedItem('Second Item')}
              />
              <List.Item
                title="Third item"
                style={styles.listItem}
                right={() => <View />}
                onPress={() => setSelectedItem('Third Item')}
              />
            </List.Accordion>
          </View>
          <Pressable onPress={() => navigation.navigate('Cart')} style={styles.pressable}>
            <BagIcon />
          </Pressable>
        </>
      )}
    </View>
  );
}