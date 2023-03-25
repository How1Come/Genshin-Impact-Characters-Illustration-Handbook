import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import characterData from './data/characters.json';
import CharacterDetailScreen from './screens/CharacterDetailScreen.js';

import Character1Image from './images/character1.png';
import Character2Image from './images/character2.png';
import Character3Image from './images/character3.png';
// import other character images as needed

function CharacterListScreen() {
  const navigation = useNavigation();

  const handleCharacterPress = (character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  return (
    <View>
      <FlatList
        data={characterData}
        keyExtractor={(character) => character.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCharacterPress(item)}
            style={styles.characterContainer}
          >
            <Image source={getImageForCharacter(item)} style={styles.characterImage} />
            <Text style={styles.characterName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

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

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  characterImage: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CharacterList" component={CharacterListScreen} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
