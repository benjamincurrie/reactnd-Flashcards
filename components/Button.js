import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { purple, white, gray, orange } from '../utils/colors';

const Button = ({ children, onPress, type }) => {
  const styles = type='secondary' ? secondaryStyles : primaryStyles
  return (
    <TouchableOpacity
      style={
        styles.button
      }
      onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const primaryStyles = StyleSheet.create({
  button: Platform.OS === 'ios' ? {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  } : {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

const secondaryStyles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: white
  },
  text: {
    color: purple,
    fontSize: 22,
    textAlign: 'center',
  },
})
  
export default Button