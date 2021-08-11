export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(id, deck) {
  return {
    type: ADD_DECK,
    id,
    deck,
  }
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  }
}

export function addCard(card, id) {
  return {
    type: ADD_CARD,
    card,
    id,
  }
}