import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import TravelerImage from '../images/Traveler.jpg';
import VentiImage from '../images/Venti.jpg';
import DilucImage from '../images/Diluc.jpg';

import NoneBackgroundImage from '../images/none_background.jpg';
import MondstadtBackgroundImage from '../images/Mondstadt_background.jpg';

import AnemoImage from '../images/Anemo.jpg';
import PyroImage from '../images/Pyro.jpg';

import FiveStarImage from '../images/5_stars.png';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;
  const image = getImageForCharacter(character);
  const backgroundImage = getBackgroundImageForRegion(character.region);
  const FiveStarImage = getFiveStarImageForCharacter(character.star);
  const elementImage = getElementImageForElement(character.element);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <Image source={image} style={styles.characterImage} />
        <Text style={styles.characterName}>{character.name}</Text>
        <Image source={FiveStarImage} style={styles.FiveStarImage} />
        <Text>Birthday: {character.birthday}</Text>
        <Text>Affiliation: {character.affiliation}</Text>
        <Text>Role: {character.role}</Text>
        <Text>Weapon: {character.weapon}</Text>
        <Text>Constellation: {character.constellation}</Text>
        <Text>Title: {character.title}</Text>
        <Text>Region: {character.region}</Text>
        <Text>Element: {character.element}</Text>
        <Image source={elementImage} style={styles.elementImage} />
      </View>
    </View>
  );
};

function getImageForCharacter(character) {
  switch (character.name) {
    case 'Traveler':
      return TravelerImage;
    case 'Venti':
      return VentiImage;
    case 'Diluc':
      return DilucImage;
    // add other cases for other characters as needed
    default:
      return null;
  }
}

function getBackgroundImageForRegion(region) {
  switch (region) {
    case 'None':
      return NoneBackgroundImage;
    case 'Mondstadt':
      return MondstadtBackgroundImage;
    // add other cases for other regions as needed
    default:
      return NoneBackgroundImage;
  }
}

function getElementImageForElement(element) {
  switch (element) {
    case 'Anemo':
      return AnemoImage;
    case 'Pyro':
      return PyroImage;
    // add other cases for other elements as needed
    default:
      return null;
  }
}

function getFiveStarImageForCharacter(star) {
  switch (star) {
    case '5':
      return FiveStarImage;
    // add other cases for other stars as needed
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    borderRadius: 20,
    margin: 20,
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 40,
  },
  characterName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  FiveStarImage: {
    width: 144,
    height: 28,
    marginVertical:10,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  elementImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
}
});

export default CharacterDetailScreen;
