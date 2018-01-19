import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'flashcards@wfelippesilva:decks'

/**
 * Retorna todos os baralhos com seus títulos, perguntas, e respostas
 */
const getDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

async const createDeck = (deck) => {
    const decks = await getDecks()

    return AsyncStorage.setItem(
        DECKS_KEY,
        JSON.stringify({
            ...JSON.parse(decks),
            deck
        })
    )
}

export {
    getDecks,
    createDeck
}