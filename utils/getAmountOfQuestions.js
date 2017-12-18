const getAmountOfQuestions = (questions) => {
    const amount = questions.length

    if(amount > 0) {
        return amount === 1 ? `${amount} card` : `${amount} cards`
    }

    return 'No cards at the moment'
}

export default getAmountOfQuestions