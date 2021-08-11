import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import globalStyles from '../utils/styles'
import Button from '../components/Button'

class AddCard extends Component{

  state = { name: '' }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Add Card'
    })
  }

  handleQuestionChange = (question) => {
    this.setState({ question });
  }
  handleAnswerChange = (answer) => {
    this.setState({ answer });
  }
  
  submit = () => {
    const { question, answer } = this.state
    const { id, dispatch } = this.props
    
    const card = {
      question: question,
      answer: answer
    }

    dispatch(addCard(card, id))
    addCard({ card, id })

    this.props.navigation.navigate(
      "DeckView",
      {id: id}
    )
  }

  render(){
    const { id, name } = this.props;
    return(
      <View style={globalStyles.container}>
        <Text style={globalStyles.h1}>Add Card to {name}</Text>

        <Text style={globalStyles.label}>Question</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={this.handleQuestionChange}
          value={this.state.question}
        />

        <Text style={globalStyles.label}>Answer</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={this.handleAnswerChange}
          value={this.state.answer}
        />

        <Button onPress={this.submit}>Submit</Button>
      </View>
    )
  }
}

function mapStateToProps({ decks }, { route } ){
  const { id } = route.params;
  const { name } = decks[id]
  return {
    id,
    name
  }
}

export default connect(mapStateToProps)(AddCard)