import { StyleSheet } from 'react-native'
import { purple, white, gray, orange } from '../utils/colors'

export default globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: white
  },

  h1: {
    fontSize: 24,
    fontWeight: '800',
    paddingBottom: 16
  },

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
  }
})