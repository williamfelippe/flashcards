import { 
    ADD_QUESTION, 
    UPDATE_QUESTION
} from '../constants/actionsTypes.js'

export const addQuestion = (deckTitle, card) => ({
    type: ADD_QUESTION,
    deckTitle, 
    card
})

export const updateQuestion = (deckTitle, card) => ({
    type: UPDATE_QUESTION,
    deckTitle, 
    card
})