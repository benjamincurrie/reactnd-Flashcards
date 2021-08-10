import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { receiveDecks } from '../actions'
import { fetchDecks, resetDecks } from '../utils/api'
import Button from '../components/Button'
import globalStyles from '../utils/styles'

import Deck from '../components/Deck'

class Decks extends Component {
  componentDidMount (){
      const { dispatch } = this.props
      fetchDecks()
        .then((decks) =>{
          dispatch(receiveDecks({decks}));
        })
  }
  clear = () => {
    resetDecks()
      .then(() =>{
        fetchDecks()
          .then((decks) =>{
            this.props.dispatch(receiveDecks({decks}));
          })
      })
  }
  render(){
    const { decks } = this.props;
    return(
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.h1}>Decks</Text>
        {decks && Object.keys(decks).map((key) =>{
          const {name, questions } = decks[key]
          return (
            <TouchableOpacity 
            key={name}
            onPress={() => this.props.navigation.navigate(
              "DeckView",
              {name: name}
            )}>
              <Deck
                name={name}
                count={questions.length}
              />
            </TouchableOpacity>
            
          )
        })}
        <Button onPress={this.clear} type='secondary'>Reset</Button>
      </ScrollView>
    )
  }
}

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)