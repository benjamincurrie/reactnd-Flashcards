import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

import Deck from './Deck'

class Decks extends Component{
  render(){
    return(
      <ScrollView>
        <TouchableOpacity 
            key={1234}
            onPress={() => this.props.navigation.navigate(
              "DeckView",
              {title: 1234}
            )}>
          <Deck 
            title={"title"}
            count={5} />
        </TouchableOpacity>
      </ScrollView>
    );
  };
};

export default Decks