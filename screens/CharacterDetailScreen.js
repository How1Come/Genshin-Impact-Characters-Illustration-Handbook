import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import TravelerImage from '../images/Traveler.jpg';
import VentiImage from '../images/Venti.jpg';
import DilucImage from '../images/Diluc.jpg';
import AlbedoImage from '../images/Albedo.jpg';
import JeanImage from '../images/Jean.jpg';

import NoneBackgroundImage from '../images/none_background.jpg';
import MondstadtBackgroundImage from '../images/Mondstadt_background.jpg';

import AnemoImage from '../images/Anemo.jpg';
import PyroImage from '../images/Pyro.jpg';
import GeoImage from '../images/Geo.jpg';

import FiveStarImage from '../images/5_stars.png';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;
  const image = getImageForCharacter(character);
  const backgroundImage = getBackgroundImageForRegion(character.region);
  const StarImage = getStarImageForCharacter(character.star);
  const elementImage = getElementImageForElement(character.element);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <Image source={image} style={styles.characterImage} />
        <Text style={styles.characterName}>{character.name}</Text>
        <Image source={StarImage} style={styles.StarImage} />
        {character.realName != '' && (
          <Text style={styles.infoText}>Real Name: {character.realName}</Text>
        )}
        <Text style={styles.infoText}>Birthday: {character.birthday}</Text>
        <Text style={styles.infoText}>Affiliation: {character.affiliation}</Text>
        <Text style={styles.infoText}>Weapon: {character.weapon}</Text>
        <Text style={styles.infoText}>Constellation: {character.constellation}</Text>
        <Text style={styles.infoText}>Title: {character.title}</Text>
        <Text style={styles.infoText}>Region: {character.region}</Text>
        <Text style={styles.infoText}>Element: {character.element}</Text>
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
    case 'Albedo':
      return AlbedoImage;
    case 'Jean':
      return JeanImage;
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
    case 'Geo':
      return GeoImage;
    // add other cases for other elements as needed
    default:
      return null;
  }
}

function getStarImageForCharacter(star) {
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
    justifyContent: 'center'
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
    width: 180,
    height: 180,
    borderRadius: 105,
    marginTop: 40,
  },
  characterName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  StarImage: {
    width: 180,
    height: 35,
    marginVertical: 10,
  },
  infoText: {
    marginBottom: 10,
    fontSize: 20,
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
    marginVertical: 10,
}
});

export default CharacterDetailScreen;
