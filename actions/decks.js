import { 
    SET_DECKS,
    ADD_DECK 
} from '../constants/actionsTypes.js'

export const setDecks = (decks) => ({
    type: SET_DECKS,
    decks
})

export const addDeck = (deck) => ({
    type: ADD_DECK,
    deck
})