import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
      case ADD_DECK :
        return {
          ...state,
          decks: {
            ...state.decks,
            [action.deck.name]: action.deck
          }
        }
      case ADD_CARD:
        const { card, id } = action
        return{
          ...state,
          decks: {
            ...state.decks,
            [id]: {
              name: state.decks[id].name,
              cards: state.decks[id].cards.concat([card])
            }
          }
        }
    default:
      return state
  }
}

export default decks