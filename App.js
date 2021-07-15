import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Decks from './components/Decks'
import Quiz from './components/Quiz'


import Constants from 'expo-constants'

function FlashcardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <View>
    <FlashcardsStatusBar style="auto" />
      <Decks />
    </View>
  );
}