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
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <Button onPress={this.submit}>Submit</Button>
      </View>
    );
  };
};


const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4
  },
  input: {
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#aaa',
    padding: 10,
    margin: 0,
    marginBottom: 16
  },
})

export default connect()(AddDeck)