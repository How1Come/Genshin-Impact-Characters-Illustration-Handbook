import React from 'react';
import { View, Text, Image } from 'react-native';
import TravelerImage from '../images/Traveler.jpg';
import VentiImage from '../images/Venti.jpg';
import DilucImage from '../images/Diluc.jpg';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;
  const image = getImageForCharacter(character);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={image} style={{ width: 150, height: 150, borderRadius: 75, marginTop: 40 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 20 }}>{character.name}</Text>
      <Text>Birthday: {character.birthday}</Text>
      <Text>Affiliation: {character.affiliation}</Text>
      <Text>Role: {character.role}</Text>
      <Text>Weapon: {character.weapon}</Text>
      <Text>Constellation: {character.constellation}</Text>
      <Text>Title: {character.title}</Text>
      <Text>Region: {character.region}</Text>
    </View>
  );
};

function getImageForCharacter(character) {
  switch (character.name) {
    case "Traveler":
      return TravelerImage;
    case "Venti":
      return VentiImage;
    case "Diluc":
      return DilucImage;
    // add other cases for other characters as needed
    default:
      return null;
  }
}


export default CharacterDetailScreen;
