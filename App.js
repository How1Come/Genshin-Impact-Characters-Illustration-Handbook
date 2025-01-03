import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import characterData from './data/characters.json';
import CharacterDetailScreen from './screens/CharacterDetailScreen.js';
import SearchBar from './components/SearchBar.js';

import TravelerImage from './images/Traveler.jpg';
import VentiImage from './images/Venti.jpg';
import DilucImage from './images/Diluc.jpg';
import AlbedoImage from './images/Albedo.jpg';
import JeanImage from './images/Jean.jpg';
// import other character images as needed

function CharacterListScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredCharacterData, setFilteredCharacterData] = useState([]);

  useEffect(() => {
    setFilteredCharacterData(
      characterData.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleCharacterPress = (character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  return (
    <View>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredCharacterData}
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
    width: 54,
    height: 54,
    marginRight: 16,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 16,
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
