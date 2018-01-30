import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'flashcards@wfelippesilva:decks'

/**
 * Retorna todos os baralhos com seus títulos, perguntas, e respostas
 */
const getDecks = () => {
    return AsyncStorage.getItem(DECKS_KEY)
}

const addDeck = (deck) => {
    getDecks()
        .then(JSON.parse)
        .then(decks => {
            if (decks) {
                AsyncStorage.setItem(DECKS_KEY, JSON.stringify({
                    ...decks,
                    [deck.title]: deck
                }))

                return
            }

            AsyncStorage.setItem(DECKS_KEY, JSON.stringify({
                [deck.title]: deck
            }))
        })
}

const addCardToDeck = (deckTitle, card) => {
    getDecks()
        .then(JSON.parse)
        .then(decks => {
            const deck = decks[deckTitle]

            console.log(JSON.stringify({
                ...decks,
                [deckTitle]: {
                    ...deck,
                    questions: deck.questions.concat(card)
                }
            }))

            if(deck) {
                AsyncStorage.setItem(DECKS_KEY, JSON.stringify({
                    ...decks,
                    [deckTitle]: {
                        ...deck,
                        questions: deck.questions.concat(card)
                    }
                }))
            }
        })
}

export {
    getDecks,
    addDeck,
    addCardToDeck
}