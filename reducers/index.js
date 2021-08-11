import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from '../actions'

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
            [action.id]: action.deck
          }
        }
      case REMOVE_DECK :
        var decks = state.decks
        delete decks[action.id]

        return {
          ...state,
          decks: {
            ...decks
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