import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { purple, white, gray, orange } from '../utils/colors'

const Deck = (props) => {
  const { name, count } = props;

  return (
    <View style={styles.deck}>
      <Text style={styles.deckName}>{name}</Text>
      <Text style={styles.cardCount}>{count} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    backgroundColor: white,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 1.0,
  },
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