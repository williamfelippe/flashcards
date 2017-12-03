import { ADD_DECK } from '../constants/actionsTypes.js'

const initialState = {
    byId: {},
    allIds: []
}

const decks = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DECK:
            return addDeck(state, action.deck)

        default:
            return state
    }
}

const addDeck = (state, deck) => {
    return {
        ...state,
        byId: {
            ...state.byId,
            [deck.title]: deck
        },
        allIds: [
            ...state.allIds,
            deck.title
        ]
    }
}

export default decks