import React from 'react';
import { View, Text, Image } from 'react-native';
import Character1Image from '../images/character1.png';
import Character2Image from '../images/character2.png';
import Character3Image from '../images/character3.png';

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
    </View>
  );
};

function getImageForCharacter(character) {
  switch (character.id) {
    case 1:
      return Character1Image;
    case 2:
      return Character2Image;
    case 3:
      return Character3Image;
    // add other cases for other characters as needed
    default:
      return null;
  }
}

export default CharacterDetailScreen;
