import { 
    ADD_QUESTION, 
    UPDATE_QUESTION
} from '../constants/actionsTypes.js'

const initialState = {
    byId: {},
    allIds: []
}

const questions = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD:
            return addQuestion(state, action.deckTitle, action.card)

        case UPDATE_CARD:
            return updateQuestion(state, action.deckTitle, action.card)

        default:
            return state
    }
}

const addQuestion = (state, deckTitle, card) => {
    const question = card.question

    return {
        ...state,
        byId: {
            ...state.byId,
            [deckTitle]: {
                ...state.byId[deckTitle],
                [question]: card
            }
        },
        allIds: [
            ...state.allIds,
            question
        ]
    }
}

const updateQuestion = (state, deckTitle, card) => {
    const question = card.question

    return {
        ...state,
        byId: {
            ...state.byId,
            [deckTitle]: {
                ...state.byId[deckTitle],
                [question]: {
                    ...state.byId[deckTitle][question]
                    card
                }
            }
        }
    }
}

export default questions