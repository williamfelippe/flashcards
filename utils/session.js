import { AsyncStorage } from 'react-native'
import uuid from 'uuid'

/**
 * Retorna todos os baralhos com seus títulos, perguntas, e respostas
 */
export const getDecks = () => {
    return AsyncStorage.getAllKeys()
}

/**
 * Dado um único argumento id, ele retorna o baralho associado àquele id.
 */
export const getDeck = (title) => {
    return AsyncStorage.getItem(title)
}

/**
 * Dado um único argumento title, ele adiciona-o aos baralhos. 
 * @param {String} title 
 */
export const addDeck = (title) => {
    const id = uuid()

    const deck = {
        [id]: {
            title,
            questions: []
        }
    }

    AsyncStorage.setItem(title, JSON.stringify(deck))
        .then(() => {
            return new Promise((resolve, reject) => resolve(id))
        })
}

/**
 * Dado dois argumentos, title e card, ele adiciona o cartão à lista
 * de perguntas ao baralho com o título associado. 
 * @param {String} title 
 * @param {Object} card 
 */
export const addCardToDeck = (title, card) => {
    const deck = {
        [title]: {
            questions: [card]
        }
    }

    return AsyncStorage.mergeItem(title, JSON.stringify(deck))
}