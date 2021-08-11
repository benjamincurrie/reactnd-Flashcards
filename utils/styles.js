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
  h2: {
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 8
  },
  card: {
    backgroundColor: white,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#eee',
    borderWidth: 1,
    shadowOffset:{  width: 0,  height: 2,  },
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 1.0,
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