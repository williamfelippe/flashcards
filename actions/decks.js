import { ADD_DECK } from '../constants/actionsTypes.js'

export const addDeck = (deck) => ({
    type: ADD_DECK,
    deck
})