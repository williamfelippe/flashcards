import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'flashcards@wfelippesilva:decks'

/**
 * Retorna todos os baralhos com seus títulos, perguntas, e respostas
 */
const getDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

const createDeck = (deck) => {
    getDecks()
        .then(decks => {
            if (decks) {
                console.log('DECKS', JSON.parse(decks))
                AsyncStorage.setItem(DECKS_KEY, JSON.stringify([...JSON.parse(decks), deck]))
                return
            }

            AsyncStorage.setItem(DECKS_KEY, JSON.stringify([deck]))
        })
}

export {
    getDecks,
    createDeck
}