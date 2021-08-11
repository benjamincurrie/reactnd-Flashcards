import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { purple, white, gray } from '../utils/colors'

const Button = ({ children, onPress, type='primary', disabled, color=purple, style }) => {
  var typeStyles

  color = disabled ? gray : color

  switch(type) {
    case 'primary':
       typeStyles = StyleSheet.create({
        button: {
          backgroundColor: color,
        },
        text: {
          color: white,
        }
      })
      break;
    case 'secondary':
      typeStyles = StyleSheet.create({
        button: {
          borderColor: color,
          borderWidth: 1
        },
        text: {
          color: color,
        }
      })
      break;
    case 'text':
      typeStyles = StyleSheet.create({
        text: {
          color: color,
        }
      })
      break;
  }
  return (
    <TouchableOpacity
      style={{...baseStyles.button, ...typeStyles.button, ...style}}
      onPress={onPress}
      disabled = {disabled}>
        <Text style={{...baseStyles.text, ...typeStyles.text}}>{children}</Text>
    </TouchableOpacity>
  )
}

const baseStyles = StyleSheet.create({
  button: Platform.OS === 'ios' ? {
    padding: 8,
    borderRadius: 8,
    marginLeft: 40,
    marginRight: 40,
  } : {
    padding: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  }
})
  
export default Button