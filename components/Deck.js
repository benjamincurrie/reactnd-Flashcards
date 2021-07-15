import React from 'react'
import { View, Text } from 'react-native'

const Deck = (props) => {
  const { title, count } = props;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{count}</Text>
    </View>
    )
  }
  
export default Deck;