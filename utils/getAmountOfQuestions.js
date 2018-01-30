import {
    noCardsAtTheMomentLabel,
    amountOfCardsLabel
} from '../strings/labels'

const getAmountOfQuestions = (questions) => {
    const amount = questions.length

    if(amount > 0) {
        return amountOfCardsLabel(amount)
    }

    return noCardsAtTheMomentLabel
}

export default getAmountOfQuestions