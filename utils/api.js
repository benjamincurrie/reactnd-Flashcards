import AsyncStorage from '@react-native-async-storage/async-storage'

export const STORAGE_KEY = 'UdacityFlashcards:decks'

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
    .then(decks => {
      if (decks === null) {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData))
        return sampleData
      } else {
        return JSON.parse(decks)
      }
    });
}

export function resetDecks () {
  return AsyncStorage.removeItem(STORAGE_KEY)
    .then(() => {
      return fetchDecks()
    })
}

export function saveDeck(id, deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[id]: deck}))
}

export function deleteDeck(id) {
  return fetchDecks()
    .then(decks => {
      delete decks[id]
      return AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(decks))
    })
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
      AsyncStorage.mergeItem(DECK_STORAGE, JSON.stringify({[id]: deck}))
    })
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