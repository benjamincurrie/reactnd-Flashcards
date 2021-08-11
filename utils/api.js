import AsyncStorage from '@react-native-community/async-storage'

export const STORAGE_KEY = 'Udacity:flashcards'

const sampleData = {
  Animals: {
    name: 'Animals',
    cards: [
      {
        question: 'What is the fastest animal?',
        answer: 'Cheetah'
      },
      {
        question: 'What is the tallest animal?',
        answer: 'Giraffe'
      }
    ]
  },
  French: {
    name: 'French',
    cards: [
      {
        question: 'Hello',
        answer: 'Bonjour'
      }
    ]
  },
  Geography: {
    name: 'Geography',
    cards: [
      {
        question: 'What is the Capital of Canada',
        answer: 'Ottawa'
      },
      {
        question: 'Which hemisphere is Japan located',
        answer: 'Northern'
      }
    ]
  },
}

export function fetchDecks () {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      if (results === null) {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData))
        return sampleData
      } else {
        return JSON.parse(results)
      }
    });
}

export function resetDecks () {
  return AsyncStorage.removeItem(STORAGE_KEY)
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[deck.name]: deck}))
}

export function addCard({ card, id }) {
  fetchDecks()
    .then((decks) =>{
      return{
        [id]: {
          cards: decks[id].cards.concat([card])
        }
      }
    })
    .then((deck) =>{
      AsyncStorage.mergeItem(DECK_STORAGE, JSON.stringify({[id]: deck}));
    });
}

// export function removeDeck() {
//   return AsyncStorage.getItem(STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.getItem(STORAGE_KEY, JSON.stringify(data))
//     })
// }