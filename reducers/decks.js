import { 
    RESET_DECKS,
    SET_DECKS,
    ADD_DECK,
    UPDATE_DECK 
} from '../constants/actionsTypes.js'

const initialState = {
    byId: {},
    allIds: []
}

const decks = (state = initialState, action) => {
    switch(action.type) {
        case RESET_DECKS: 
            return initialState

        case SET_DECKS:
            return setDecks(state, action.decks)

        case ADD_DECK:
            return addDeck(state, action.deck)

        case UPDATE_DECK:
            return updateDeck(state, action.deck)

        default:
            return state
    }
}

const setDecks = (state, decks) => {
    let indexedState = {...state}
    
    for (const deck of decks) {
        indexedState = {
            ...indexedState,
            byId: {
                ...indexedState.byId,
                [deck.title]: deck
            },
            allIds: [
                ...indexedState.allIds,
                deck.title
            ]
        }
    }

    return indexedState
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

const updateDeck = (state, deck) => {
    return {
        ...state,
        byId: {
            ...state.byId,
            [deck.title]: deck
        }
    }
}

export default decks