import AsyncStorage from '@react-native-community/async-storage'

export const STORAGE_KEY = 'Udacity:flashcards'

const sampleData = {
  Animals: {
    name: 'Animals',
    questions: [
      {
        question: 'What is the fastest animal?',
        answer: 'Cheetah',
        correct: true
      },
      {
        question: 'What is the largest animal?',
        answer: 'Giraffe',
        correct: false
      }
    ]
  },
  French: {
    name: 'French',
    questions: [
      {
        question: 'Hello',
        answer: 'Bonjour',
        correct: true
      }
    ]
  },
  Geography: {
    name: 'Geography',
    questions: [
      {
        question: 'What is the Capital of Canada',
        answer: 'Toronto',
        correct: false
      },
      {
        question: 'Which hemisphere is Japan located',
        answer: 'Northern',
        correct: true
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

// export function removeDeck() {
//   return AsyncStorage.getItem(STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.getItem(STORAGE_KEY, JSON.stringify(data))
//     })
// }