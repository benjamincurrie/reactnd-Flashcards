import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { purple, white, gray, orange } from '../utils/colors'
import globalStyles from '../utils/styles'

const Deck = (props) => {
  const { name, count } = props;

  return (
    <View style={globalStyles.card}>
      <Text style={styles.deckName}>{name}</Text>
      <Text style={styles.cardCount}>{count} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deckName: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 8,
    fontWeight: '800'
  },
  cardCount: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: gray
  }
})
  
export default Deck;