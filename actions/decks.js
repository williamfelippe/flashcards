import { 
    RESET_DECKS,
    SET_DECKS,
    ADD_DECK,
    UPDATE_DECK
} from '../constants/actionsTypes.js'

export const resetDecks = () => ({
    type: RESET_DECKS
})

export const setDecks = (decks) => ({
    type: SET_DECKS,
    decks
})

export const addDeck = (deck) => ({
    type: ADD_DECK,
    deck
})

export const updateDeck = (deck) => ({
    type: UPDATE_DECK,
    deck
})