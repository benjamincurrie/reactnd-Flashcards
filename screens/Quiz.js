import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { red, green } from '../utils/colors';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class Quiz extends Component {

  state = {
    i: 0,
    correct: 0,
    showAnswer: false
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: `${this.props.name} Quiz`
    })
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  submitAnswer = (correct) => {
    var i = this.state.i+1
    this.setState({
      i: i,
      correct: correct ? this.state.correct+1 : this.state.correct,
      showAnswer: false
    })

    if (i === this.props.cards.length ) {
      clearLocalNotification()
        .then(setLocalNotification())
    }
  }

  resetQuiz = () => {
    this.setState({
      i: 0,
      correct: 0,
      showAnswer: false
    })
  }

  render() {
    const { id, name, cards, navigation } = this.props
    const { i, correct, showAnswer } = this.state

    return(
      <View style={globalStyles.container}>
        {i < cards.length ? (
          <View>
            <Text style={{...globalStyles.h2, textAlign: 'center'}}>{cards.length - i} questions remaining</Text>
            <TouchableOpacity onPress={this.showAnswer} style={globalStyles.card}>
              <Text style={{...globalStyles.h1, textAlign: 'center'}}>{cards[i].question}</Text>
              {showAnswer ? (
                <Text style={{textAlign: 'center'}}>{cards[i].answer}</Text>
              ) : (
                <Text style={{textAlign: 'center'}}>Tap to answer</Text>
              )}
            </TouchableOpacity>
            {showAnswer && (
              <View>
                <Button onPress={() => this.submitAnswer(true)} type='secondary' color={green} style={{marginBottom: 16}}>Correct</Button>
                <Button onPress={() => this.submitAnswer(false)} type='secondary' color={red}>Incorect</Button>
              </View>
            )}
          </View>
        ) : (
          <View>
            <Text style={{...globalStyles.h1, textAlign: 'center'}}>Your Score</Text>
            <Text style={{...globalStyles.h1, textAlign: 'center'}}>{correct} / {cards.length}</Text>
            <Button onPress={this.resetQuiz} type='secondary' style={{marginBottom: 16}}>Restart Quiz</Button>
            <Button onPress={() => navigation.navigate(
                'DeckView',
                {id: id}
              )} type='secondary'>
                Return to Deck
            </Button>
          </View>
        )}
        
      </View>
    );
  };
};

function mapStateToProps({ decks }, { route } ){
  const { id } = route.params;
  const { name, cards } = decks[id]
  return {
    id,
    name,
    cards,
  }
}
  
  export default connect(mapStateToProps)(Quiz)