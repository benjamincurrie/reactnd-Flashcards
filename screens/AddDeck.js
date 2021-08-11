import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import globalStyles from '../utils/styles'

import Button from '../components/Button'

class AddDeck extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '' }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name });
  }
  
  submit = () => {
    const { name } = this.state
    const deck = {
      name: name,
      cards: [],
    }

    this.props.dispatch(addDeck(deck))
    saveDeck(deck)
    this.props.navigation.navigate("Decks");
  }

  render(){
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.h1}>Add Deck</Text>
        <Text style={globalStyles.label}>What is the title of your new deck?</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <Button onPress={this.submit}>Submit</Button>
      </View>
    );
  };
};

export default connect()(AddDeck)