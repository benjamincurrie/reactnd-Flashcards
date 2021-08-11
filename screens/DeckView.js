import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import globalStyles from '../utils/styles'
import { purple, white, gray, orange, red } from '../utils/colors'
import Button from '../components/Button'

class DeckView extends Component {

  setHeaderTitle = (title) =>{
    this.props.navigation.setOptions({
        title: title
    })
  }

  render(){
    const { id, name, cards, navigation } = this.props;
    this.setHeaderTitle(name)
    
    return(
      <View style={globalStyles.container}>
        <Text style={{...globalStyles.h1, textAlign: 'center'}}>{name}</Text>    
        <Text style={styles.cardCount}>{cards.length} cards</Text>

        <Button onPress={() => navigation.navigate(
          'AddCard',
          {id: id}
        )} type='secondary' style={{marginBottom: 16}}>
          Add Card
        </Button>
        <Button onPress={() => navigation.navigate(
          'Quiz',
          {id: id}
        )} disabled= { cards.length === 0 ? true : false }  style={{marginBottom: 16}}>
          Take Quiz
        </Button>
        <Button onPress={this.deleteDeck} type='text' color={red}>
          Delete Deck
        </Button>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  cardCount: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: gray,
    marginBottom:32
  }
})

function mapStateToProps({ decks }, { route } ){
  const { id } = route.params;
  const { name, cards } = decks[id]
  return {
    id,
    name,
    cards,
  }
}

export default connect(mapStateToProps)(DeckView)